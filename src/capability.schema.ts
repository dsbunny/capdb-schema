// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { SqliteDateSchema } from './sqlite-date.schema.js';
import { jsonSafeParser } from './json-safe-parser.js';

export const CapabilityBaseSchema = z.object({
	mime_type: z.string().min(3).max(512)
		.describe('The MIME type of the capability'),
	mime_subtype: z.string().min(3).max(512)
		.describe('The MIME subtype of the capability'),
	is_supported: z.boolean()
		.describe('Whether the capability is supported'),
	is_smooth: z.boolean()
		.describe('Whether the capability is smooth'),
	is_power_efficient: z.boolean()
		.describe('Whether the capability is power efficient'),
});
export type CapabilityBase = z.infer<typeof CapabilityBaseSchema>;

export const CapabilityVideoSchema = CapabilityBaseSchema.extend({
	mime_type: z.literal('video'),
	codec: z.string().min(3).max(512)
		.describe('The RFC-6381 codec of the capability'),
	width: z.number().int().min(1).max(10000)
		.describe('Maximum width of the capability'),
	height: z.number().int().min(1).max(10000)
		.describe('Maximum height of the capability'),
	frame_rate: z.number().int().min(1).max(1000)
		.describe('Maximum frames per second of the capability'),
})
	.describe('The video capability');
export type CapabilityVideo = z.infer<typeof CapabilityVideoSchema>;

export const CapabilityAudioSchema = CapabilityBaseSchema.extend({
	mime_type: z.literal('audio'),
	codec: z.string().min(3).max(512)
		.describe('The RFC-6381 codec of the capability'),
	// Typically 8kHz to 48kHz, although only frequencies up to 20 kHz are
	// audible.  96 kHz and 192 kHz are used for professional audio.
	sample_rate: z.number().int().min(1).max(192000)
		.describe('Maximum sample rate of the capability'),
	// An integer cannot represent 5.1 surround sound.
	channels: z.string().min(1).max(512)
		.describe('Maximum number of channels of the capability'),
})
	.describe('The audio capability');
export type CapabilityAudio = z.infer<typeof CapabilityAudioSchema>;

export const CapabilityImageSchema = CapabilityBaseSchema.extend({
	mime_type: z.literal('image'),
	width: z.number().int().min(1).max(65535)
		.describe('Maximum width of the capability'),
	height: z.number().int().min(1).max(65535)
		.describe('Maximum height of the capability'),
	is_smooth: z.literal(false)
		.describe('Images are not smooth, as they are static'),
	is_power_efficient: z.literal(true)
		.describe('Images are power efficient, as they are static'),
})
	.describe('The image capability');
export type CapabilityImage = z.infer<typeof CapabilityImageSchema>;

export const CapabilityMetadataSchema = z.object({
	tenant_id: z.uuid()
		.describe('The UUID of the tenant'),
	capability_id: z.uuid()
		.describe('The UUID of the capability'),
	create_timestamp: z.iso.datetime()  // ISO 8601
		.describe('The timestamp of when the capability was created'),
	modify_timestamp: z.iso.datetime()
		.describe('The timestamp of when the capability was last modified'),
	is_deleted: z.boolean().default(false)
		.describe('Whether the capability is deleted'),
	row_number: z.number().int()
		.describe('The row number of the capability'),
});

export const CapabilityTypesSchema = z.discriminatedUnion("mime_type", [
	CapabilityVideoSchema,
	CapabilityAudioSchema,
	CapabilityImageSchema,
]);
export type CapabilityTypes = z.infer<typeof CapabilityTypesSchema>;

export const CapabilitySchema = z.intersection(CapabilityTypesSchema, CapabilityMetadataSchema);
export type Capability = z.infer<typeof CapabilitySchema>;

export const DbDtoFromCapabilitySchema = CapabilitySchema.transform((capability, ctx) => {
	let detail: string;
	if(capability.mime_type === 'video') {
		detail = JSON.stringify({
			codec: capability.codec,
			width: capability.width,
			height: capability.height,
			frame_rate: capability.frame_rate,
			is_smooth: capability.is_smooth,
			is_power_efficient: capability.is_power_efficient,
		} as CapabilityVideo);
	} else if(capability.mime_type === 'audio') {
		detail = JSON.stringify({
			codec: capability.codec,
			sample_rate: capability.sample_rate,
			channels: capability.channels,
		} as CapabilityAudio);
	} else if(capability.mime_type === 'image') {
		detail = JSON.stringify({
			width: capability.width,
			height: capability.height,
		} as CapabilityImage);
	} else {
		ctx.addIssue({
			code: "custom",
			message: 'Invalid mime type',
			fatal: true,
		});
		return z.NEVER;
	}
	return {
		capability_id: capability.capability_id,
		tenant_id: capability.tenant_id,
		mime_type: capability.mime_type,
		mime_subtype: capability.mime_subtype,
		detail,
		is_supported: capability.is_supported,
		create_timestamp: capability.create_timestamp,
		modify_timestamp: capability.modify_timestamp,
		is_deleted: capability.is_deleted,
		row_number: capability.row_number,
	};
});

export const DbDtoToCapabilitySchema = z.object({
	capability_id: z.uuid(),
	tenant_id: z.uuid(),
	mime_type: z.string().min(3).max(512),
	mime_subtype: z.string().min(3).max(512),
	detail: z.string().min(3).max(512),
	is_supported: z.number().default(0),
	create_timestamp: SqliteDateSchema,
	modify_timestamp: SqliteDateSchema,
	is_deleted: z.number().default(0),
	row_number: z.number().int(),
})
.transform((dto, ctx): Capability => {
	if(dto.mime_type === 'video') {
		const detail = jsonSafeParser(CapabilityVideoSchema).safeParse(dto.detail);
		if(!detail.success) {
			ctx.addIssue({
				code: "custom",
				message: 'Failed to parse video capability',
				fatal: true,
			});
			return z.NEVER;
		}
		return {
			...detail.data,
			tenant_id: dto.tenant_id,
			capability_id: dto.capability_id,
			create_timestamp: dto.create_timestamp,
			modify_timestamp: dto.modify_timestamp,
			is_deleted: Boolean(dto.is_deleted),
			row_number: dto.row_number,
		};
	} else if(dto.mime_type === 'audio') {
		const detail = jsonSafeParser(CapabilityAudioSchema).safeParse(dto.detail);
		if(!detail.success) {
			ctx.addIssue({
				code: "custom",
				message: 'Failed to parse audio capability',
				fatal: true,
			});
			return z.NEVER;
		}
		return {
			...detail.data,
			tenant_id: dto.tenant_id,
			capability_id: dto.capability_id,
			create_timestamp: dto.create_timestamp,
			modify_timestamp: dto.modify_timestamp,
			is_deleted: Boolean(dto.is_deleted),
			row_number: dto.row_number,
		};
	} else if(dto.mime_type === 'image') {
		const detail = jsonSafeParser(CapabilityImageSchema).safeParse(dto.detail);
		if(!detail.success) {
			ctx.addIssue({
				code: "custom",
				message: 'Failed to parse image capability',
				fatal: true,
			});
			return z.NEVER;
		}
		return {
			...detail.data,
			tenant_id: dto.tenant_id,
			capability_id: dto.capability_id,
			create_timestamp: dto.create_timestamp,
			modify_timestamp: dto.modify_timestamp,
			is_deleted: Boolean(dto.is_deleted),
			row_number: dto.row_number,
		};
	}
	ctx.addIssue({
		code: "custom",
		message: 'Invalid mime type',
		fatal: true,
	});
	return z.NEVER;
});

// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';

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
}).register(dsbunnyRegistry, {
	id: 'CapabilityBaseSchema',
	description: 'The base schema for a capability, including MIME type, support, smoothness, and power efficiency',
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
}).register(dsbunnyRegistry, {
	id: 'CapabilityVideoSchema',
	description: 'The video capability',
});
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
}).register(dsbunnyRegistry, {
	id: 'CapabilityAudioSchema',
	description: 'The audio capability',
});
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
}).register(dsbunnyRegistry, {
	id: 'CapabilityImageSchema',
	description: 'The image capability',
});
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
}).register(dsbunnyRegistry, {
	id: 'CapabilityMetadataSchema',
	description: 'The metadata of a capability, including tenant ID, capability ID, timestamps, deletion status, and row number',
});

export const CapabilityTypesSchema = z.discriminatedUnion("mime_type", [
	CapabilityVideoSchema,
	CapabilityAudioSchema,
	CapabilityImageSchema,
]).register(dsbunnyRegistry, {
	id: 'CapabilityTypesSchema',
	description: 'The types of capabilities, including video, audio, and image',
});
export type CapabilityTypes = z.infer<typeof CapabilityTypesSchema>;

export const CapabilitySchema = z.intersection(CapabilityTypesSchema, CapabilityMetadataSchema).register(dsbunnyRegistry, {
	id: 'CapabilitySchema',
	description: 'The complete schema of a capability, including type-specific details and metadata',
});
export type Capability = z.infer<typeof CapabilitySchema>;

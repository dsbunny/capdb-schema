// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import {
	CapabilitySchema,
	CapabilityAudioSchema,
	CapabilityImageSchema,
	CapabilityVideoSchema,
} from './capability.schema.js';

// #region Capabilities
export const CreateVideoCapabilityRequestSchema = z.array(CapabilityVideoSchema).register(dsbunnyRegistry, {
	id: 'CreateVideoCapabilityRequestSchema',
	description: 'Create video capability request schema',
});
export type CreateVideoCapabilityRequest = z.infer<typeof CreateVideoCapabilityRequestSchema>;
export const CreateVideoCapabilityResponseSchema = z.literal("Created").register(dsbunnyRegistry, {
	id: 'CreateVideoCapabilityResponseSchema',
	description: 'Create video capability response schema',
});
export type CreateVideoCapabilityResponse = z.infer<typeof CreateVideoCapabilityResponseSchema>;

export const CreateAudioCapabilityRequestSchema = z.array(CapabilityAudioSchema).register(dsbunnyRegistry, {
	id: 'CreateAudioCapabilityRequestSchema',
	description: 'Create audio capability request schema',
});
export type CreateAudioCapabilityRequest = z.infer<typeof CreateAudioCapabilityRequestSchema>;
export const CreateAudioCapabilityResponseSchema = z.literal("Created").register(dsbunnyRegistry, {
	id: 'CreateAudioCapabilityResponseSchema',
	description: 'Create audio capability response schema',
});
export type CreateAudioCapabilityResponse = z.infer<typeof CreateAudioCapabilityResponseSchema>;

export const CreateImageCapabilityRequestSchema = z.array(CapabilityImageSchema).register(dsbunnyRegistry, {
	id: 'CreateImageCapabilityRequestSchema',
	description: 'Create image capability request schema',
});
export type CreateImageCapabilityRequest = z.infer<typeof CreateImageCapabilityRequestSchema>;
export const CreateImageCapabilityResponseSchema = z.literal("Created").register(dsbunnyRegistry, {
	id: 'CreateImageCapabilityResponseSchema',
	description: 'Create image capability response schema',
});
export type CreateImageCapabilityResponse = z.infer<typeof CreateImageCapabilityResponseSchema>;

export const GetVideoCapabiltiesRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetVideoCapabiltiesRequestSchema',
	description: 'Get video capabilities request schema',
});
export type GetVideoCapabiltiesRequest = z.infer<typeof GetVideoCapabiltiesRequestSchema>;
export const GetVideoCapabiltiesResponseSchema = z.object({
	capabilities: z.array(CapabilitySchema)
		.describe('Array of video capabilities retrieved.'),
	next_token: z.string().nullable()
		.describe('Token for pagination, null if no more results.'),
}).register(dsbunnyRegistry, {
	id: 'GetVideoCapabiltiesResponseSchema',
	description: 'Get video capabilities response schema',
});
export type GetVideoCapabiltiesResponse = z.infer<typeof GetVideoCapabiltiesResponseSchema>;

export const GetAudioCapabiltiesRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetAudioCapabiltiesRequestSchema',
	description: 'Get audio capabilities request schema',
});
export type GetAudioCapabiltiesRequest = z.infer<typeof GetAudioCapabiltiesRequestSchema>;
export const GetAudioCapabiltiesResponseSchema = z.object({
	capabilities: z.array(CapabilitySchema)
		.describe('Array of audio capabilities retrieved.'),
	next_token: z.string().nullable()
		.describe('Token for pagination, null if no more results.'),
}).register(dsbunnyRegistry, {
	id: 'GetAudioCapabiltiesResponseSchema',
	description: 'Get audio capabilities response schema',
});
export type GetAudioCapabiltiesResponse = z.infer<typeof GetAudioCapabiltiesResponseSchema>;

export const GetImageCapabiltiesRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetImageCapabiltiesRequestSchema',
	description: 'Get image capabilities request schema',
});
export type GetImageCapabiltiesRequest = z.infer<typeof GetImageCapabiltiesRequestSchema>;
export const GetImageCapabiltiesResponseSchema = z.object({
	capabilities: z.array(CapabilitySchema)
		.describe('Array of image capabilities retrieved.'),
	next_token: z.string().nullable()
		.describe('Token for pagination, null if no more results.'),
}).register(dsbunnyRegistry, {
	id: 'GetImageCapabiltiesResponseSchema',
	description: 'Get image capabilities response schema',
});
export type GetImageCapabiltiesResponse = z.infer<typeof GetImageCapabiltiesResponseSchema>;
// #endregion

// #region API
export const CapDbRequestSchema = z.union([
	CreateVideoCapabilityRequestSchema,
	CreateAudioCapabilityRequestSchema,
	CreateImageCapabilityRequestSchema,
	GetVideoCapabiltiesRequestSchema,
	GetAudioCapabiltiesRequestSchema,
	GetImageCapabiltiesRequestSchema,
]).register(dsbunnyRegistry, {
	id: 'CapDbRequestSchema',
	description: 'CapDB request schema',
});
export type CapDbRequest = z.infer<typeof CapDbRequestSchema>;

export const CapDbResponseSchema = z.union([
	CreateVideoCapabilityResponseSchema,
	CreateAudioCapabilityResponseSchema,
	CreateImageCapabilityResponseSchema,
	GetVideoCapabiltiesResponseSchema,
	GetAudioCapabiltiesResponseSchema,
	GetImageCapabiltiesResponseSchema,
	ErrorResponseSchema,
]).register(dsbunnyRegistry, {
	id: 'CapDbResponseSchema',
	description: 'CapDB response schema',
});
export type CapDbResponse = z.infer<typeof CapDbResponseSchema>;
// #endregion

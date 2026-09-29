// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { CapabilitySchema, CapabilityAudioSchema, CapabilityImageSchema, CapabilityVideoSchema, } from './capability.schema.js';
// #region Capabilities
export const CreateVideoCapabilityRequestSchema = z.array(CapabilityVideoSchema)
    .describe('Create video capability request schema');
export const CreateVideoCapabilityResponseSchema = z.literal("Created")
    .describe('Create video capability response schema');
export const CreateAudioCapabilityRequestSchema = z.array(CapabilityAudioSchema)
    .describe('Create audio capability request schema');
export const CreateAudioCapabilityResponseSchema = z.literal("Created")
    .describe('Create audio capability response schema');
export const CreateImageCapabilityRequestSchema = z.array(CapabilityImageSchema)
    .describe('Create image capability request schema');
export const CreateImageCapabilityResponseSchema = z.literal("Created")
    .describe('Create image capability response schema');
export const GetVideoCapabiltiesRequestSchema = z.object({})
    .describe('Get video capabilities request schema');
export const GetVideoCapabiltiesResponseSchema = z.object({
    capabilities: z.array(CapabilitySchema)
        .describe('Array of video capabilities retrieved.'),
    next_token: z.string().nullable()
        .describe('Token for pagination, null if no more results.'),
})
    .describe('Get video capabilities response schema');
export const GetAudioCapabiltiesRequestSchema = z.object({})
    .describe('Get audio capabilities request schema');
export const GetAudioCapabiltiesResponseSchema = z.object({
    capabilities: z.array(CapabilitySchema)
        .describe('Array of audio capabilities retrieved.'),
    next_token: z.string().nullable()
        .describe('Token for pagination, null if no more results.'),
})
    .describe('Get audio capabilities response schema');
export const GetImageCapabiltiesRequestSchema = z.object({})
    .describe('Get image capabilities request schema');
export const GetImageCapabiltiesResponseSchema = z.object({
    capabilities: z.array(CapabilitySchema)
        .describe('Array of image capabilities retrieved.'),
    next_token: z.string().nullable()
        .describe('Token for pagination, null if no more results.'),
})
    .describe('Get image capabilities response schema');
// #endregion
// #region API
export const CapDbRequestSchema = z.union([
    CreateVideoCapabilityRequestSchema,
    CreateAudioCapabilityRequestSchema,
    CreateImageCapabilityRequestSchema,
    GetVideoCapabiltiesRequestSchema,
    GetAudioCapabiltiesRequestSchema,
    GetImageCapabiltiesRequestSchema,
])
    .describe('CapDB request schema');
export const CapDbResponseSchema = z.union([
    CreateVideoCapabilityResponseSchema,
    CreateAudioCapabilityResponseSchema,
    CreateImageCapabilityResponseSchema,
    GetVideoCapabiltiesResponseSchema,
    GetAudioCapabiltiesResponseSchema,
    GetImageCapabiltiesResponseSchema,
    ErrorResponseSchema,
])
    .describe('CapDB response schema');
// #endregion
//# sourceMappingURL=api.schema.js.map
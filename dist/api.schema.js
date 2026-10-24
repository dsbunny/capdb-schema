// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { CapabilitySchema, CapabilityAudioSchema, CapabilityImageSchema, CapabilityVideoSchema, } from './capability.schema.js';
// #region Capabilities
export const CreateVideoCapabilityRequestSchema = z.array(CapabilityVideoSchema).register(dsbunnyRegistry, {
    id: 'CreateVideoCapabilityRequestSchema',
    description: 'Create video capability request schema',
});
export const CreateVideoCapabilityResponseSchema = z.literal("Created").register(dsbunnyRegistry, {
    id: 'CreateVideoCapabilityResponseSchema',
    description: 'Create video capability response schema',
});
export const CreateAudioCapabilityRequestSchema = z.array(CapabilityAudioSchema).register(dsbunnyRegistry, {
    id: 'CreateAudioCapabilityRequestSchema',
    description: 'Create audio capability request schema',
});
export const CreateAudioCapabilityResponseSchema = z.literal("Created").register(dsbunnyRegistry, {
    id: 'CreateAudioCapabilityResponseSchema',
    description: 'Create audio capability response schema',
});
export const CreateImageCapabilityRequestSchema = z.array(CapabilityImageSchema).register(dsbunnyRegistry, {
    id: 'CreateImageCapabilityRequestSchema',
    description: 'Create image capability request schema',
});
export const CreateImageCapabilityResponseSchema = z.literal("Created").register(dsbunnyRegistry, {
    id: 'CreateImageCapabilityResponseSchema',
    description: 'Create image capability response schema',
});
export const GetVideoCapabiltiesRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetVideoCapabiltiesRequestSchema',
    description: 'Get video capabilities request schema',
});
export const GetVideoCapabiltiesResponseSchema = z.object({
    capabilities: z.array(CapabilitySchema)
        .describe('Array of video capabilities retrieved.'),
    next_token: z.string().nullable()
        .describe('Token for pagination, null if no more results.'),
}).register(dsbunnyRegistry, {
    id: 'GetVideoCapabiltiesResponseSchema',
    description: 'Get video capabilities response schema',
});
export const GetAudioCapabiltiesRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetAudioCapabiltiesRequestSchema',
    description: 'Get audio capabilities request schema',
});
export const GetAudioCapabiltiesResponseSchema = z.object({
    capabilities: z.array(CapabilitySchema)
        .describe('Array of audio capabilities retrieved.'),
    next_token: z.string().nullable()
        .describe('Token for pagination, null if no more results.'),
}).register(dsbunnyRegistry, {
    id: 'GetAudioCapabiltiesResponseSchema',
    description: 'Get audio capabilities response schema',
});
export const GetImageCapabiltiesRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetImageCapabiltiesRequestSchema',
    description: 'Get image capabilities request schema',
});
export const GetImageCapabiltiesResponseSchema = z.object({
    capabilities: z.array(CapabilitySchema)
        .describe('Array of image capabilities retrieved.'),
    next_token: z.string().nullable()
        .describe('Token for pagination, null if no more results.'),
}).register(dsbunnyRegistry, {
    id: 'GetImageCapabiltiesResponseSchema',
    description: 'Get image capabilities response schema',
});
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
// #endregion
//# sourceMappingURL=api.schema.js.map
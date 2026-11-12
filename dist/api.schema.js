// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { CapabilityAudioSchema, CapabilityImageSchema, CapabilityVideoSchema, } from './capability.schema.js';
// #region Capabilities
export const CreateVideoCapabilityRequestSchema = z.object({
    '@type': z.literal('CreateVideoCapabilityRequest')
        .describe('Type of the create video capability request'),
    video_capabilities: z.array(CapabilityVideoSchema)
}).register(dsbunnyRegistry, {
    id: 'CreateVideoCapabilityRequestSchema',
    description: 'Create video capability request schema',
});
export const CreateVideoCapabilityResponseSchema = z.object({
    '@type': z.literal('CreateVideoCapabilityResponse')
        .describe('Type of the create video capability response'),
}).register(dsbunnyRegistry, {
    id: 'CreateVideoCapabilityResponseSchema',
    description: 'Create video capability response schema',
});
export const CreateAudioCapabilityRequestSchema = z.object({
    '@type': z.literal('CreateAudioCapabilityRequest')
        .describe('Type of the create audio capability request'),
    audio_capabilities: z.array(CapabilityAudioSchema)
}).register(dsbunnyRegistry, {
    id: 'CreateAudioCapabilityRequestSchema',
    description: 'Create audio capability request schema',
});
export const CreateAudioCapabilityResponseSchema = z.object({
    '@type': z.literal('CreateAudioCapabilityResponse')
        .describe('Type of the create audio capability response'),
}).register(dsbunnyRegistry, {
    id: 'CreateAudioCapabilityResponseSchema',
    description: 'Create audio capability response schema',
});
export const CreateImageCapabilityRequestSchema = z.object({
    '@type': z.literal('CreateImageCapabilityRequest')
        .describe('Type of the create image capability request'),
    image_capabilities: z.array(CapabilityImageSchema)
}).register(dsbunnyRegistry, {
    id: 'CreateImageCapabilityRequestSchema',
    description: 'Create image capability request schema',
});
export const CreateImageCapabilityResponseSchema = z.object({
    '@type': z.literal('CreateImageCapabilityResponse')
        .describe('Type of the create image capability response'),
}).register(dsbunnyRegistry, {
    id: 'CreateImageCapabilityResponseSchema',
    description: 'Create image capability response schema',
});
export const GetVideoCapabiltiesRequestSchema = z.object({
    '@type': z.literal('GetVideoCapabiltiesRequest')
        .describe('Type of the get video capabilities request'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetVideoCapabiltiesRequestSchema',
    description: 'Get video capabilities request schema',
});
export const GetVideoCapabiltiesResponseSchema = z.object({
    '@type': z.literal('GetVideoCapabiltiesResponse')
        .describe('Type of the get video capabilities response'),
    video_capabilities: z.array(CapabilityVideoSchema)
        .describe('Array of video capabilities retrieved.'),
    next_token: z.string().nullable()
        .describe('Token for pagination, null if no more results.'),
}).register(dsbunnyRegistry, {
    id: 'GetVideoCapabiltiesResponseSchema',
    description: 'Get video capabilities response schema',
});
export const GetAudioCapabiltiesRequestSchema = z.object({
    '@type': z.literal('GetAudioCapabiltiesRequest')
        .describe('Type of the get audio capabilities request'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetAudioCapabiltiesRequestSchema',
    description: 'Get audio capabilities request schema',
});
export const GetAudioCapabiltiesResponseSchema = z.object({
    '@type': z.literal('GetAudioCapabiltiesResponse')
        .describe('Type of the get audio capabilities response'),
    audio_capabilities: z.array(CapabilityAudioSchema)
        .describe('Array of audio capabilities retrieved.'),
    next_token: z.string().nullable()
        .describe('Token for pagination, null if no more results.'),
}).register(dsbunnyRegistry, {
    id: 'GetAudioCapabiltiesResponseSchema',
    description: 'Get audio capabilities response schema',
});
export const GetImageCapabiltiesRequestSchema = z.object({
    '@type': z.literal('GetImageCapabiltiesRequest')
        .describe('Type of the get image capabilities request'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetImageCapabiltiesRequestSchema',
    description: 'Get image capabilities request schema',
});
export const GetImageCapabiltiesResponseSchema = z.object({
    '@type': z.literal('GetImageCapabiltiesResponse')
        .describe('Type of the get image capabilities response'),
    image_capabilities: z.array(CapabilityImageSchema)
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
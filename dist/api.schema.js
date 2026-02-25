// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { ErrorResponse } from "@dsbunny/error-schema";
import { Capability, CapabilityAudio, CapabilityImage, CapabilityVideo, } from './capability.schema.js';
// #region Capabilities
export const CreateVideoCapabilityRequest = z.array(CapabilityVideo)
    .describe('Create video capability request schema');
export const CreateVideoCapabilityResponse = z.literal("Created")
    .describe('Create video capability response schema');
export const CreateAudioCapabilityRequest = z.array(CapabilityAudio)
    .describe('Create audio capability request schema');
export const CreateAudioCapabilityResponse = z.literal("Created")
    .describe('Create audio capability response schema');
export const CreateImageCapabilityRequest = z.array(CapabilityImage)
    .describe('Create image capability request schema');
export const CreateImageCapabilityResponse = z.literal("Created")
    .describe('Create image capability response schema');
export const GetVideoCapabiltiesRequest = z.object({})
    .describe('Get video capabilities request schema');
export const GetVideoCapabiltiesResponse = z.object({
    capabilities: z.array(Capability)
        .describe('Array of video capabilities retrieved.'),
    next_token: z.string().nullable()
        .describe('Token for pagination, null if no more results.'),
})
    .describe('Get video capabilities response schema');
export const GetAudioCapabiltiesRequest = z.object({})
    .describe('Get audio capabilities request schema');
export const GetAudioCapabiltiesResponse = z.object({
    capabilities: z.array(Capability)
        .describe('Array of audio capabilities retrieved.'),
    next_token: z.string().nullable()
        .describe('Token for pagination, null if no more results.'),
})
    .describe('Get audio capabilities response schema');
export const GetImageCapabiltiesRequest = z.object({})
    .describe('Get image capabilities request schema');
export const GetImageCapabiltiesResponse = z.object({
    capabilities: z.array(Capability)
        .describe('Array of image capabilities retrieved.'),
    next_token: z.string().nullable()
        .describe('Token for pagination, null if no more results.'),
})
    .describe('Get image capabilities response schema');
// #endregion
// #region API
export const CapDbRequest = z.union([
    CreateVideoCapabilityRequest,
    CreateAudioCapabilityRequest,
    CreateImageCapabilityRequest,
    GetVideoCapabiltiesRequest,
    GetAudioCapabiltiesRequest,
    GetImageCapabiltiesRequest,
])
    .describe('CapDB request schema');
export const CapDbResponse = z.union([
    CreateVideoCapabilityResponse,
    CreateAudioCapabilityResponse,
    CreateImageCapabilityResponse,
    GetVideoCapabiltiesResponse,
    GetAudioCapabiltiesResponse,
    GetImageCapabiltiesResponse,
    ErrorResponse,
])
    .describe('CapDB response schema');
// #endregion
//# sourceMappingURL=api.schema.js.map
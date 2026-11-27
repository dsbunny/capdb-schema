import * as z from "zod";
export declare const CapDbPingResponseSchema: z.ZodObject<{
    ping: z.ZodLiteral<"pong">;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CapDbPingResponse = z.infer<typeof CapDbPingResponseSchema>;
export declare const CreateVideoCapabilityBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateVideoCapabilityRequest">;
    video_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityVideo">;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateVideoCapabilityBody = z.infer<typeof CreateVideoCapabilityBodySchema>;
/** @deprecated Use CreateVideoCapabilityBodySchema. */
export declare const CreateVideoCapabilityRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateVideoCapabilityRequest">;
    video_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityVideo">;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
/** @deprecated Use CreateVideoCapabilityBody. */
export type CreateVideoCapabilityRequest = CreateVideoCapabilityBody;
export declare const CreateVideoCapabilityResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateVideoCapabilityResponse">;
}, z.core.$strip>;
export type CreateVideoCapabilityResponse = z.infer<typeof CreateVideoCapabilityResponseSchema>;
export declare const CreateAudioCapabilityBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateAudioCapabilityRequest">;
    audio_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityAudio">;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateAudioCapabilityBody = z.infer<typeof CreateAudioCapabilityBodySchema>;
/** @deprecated Use CreateAudioCapabilityBodySchema. */
export declare const CreateAudioCapabilityRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateAudioCapabilityRequest">;
    audio_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityAudio">;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
/** @deprecated Use CreateAudioCapabilityBody. */
export type CreateAudioCapabilityRequest = CreateAudioCapabilityBody;
export declare const CreateAudioCapabilityResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateAudioCapabilityResponse">;
}, z.core.$strip>;
export type CreateAudioCapabilityResponse = z.infer<typeof CreateAudioCapabilityResponseSchema>;
export declare const CreateImageCapabilityBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateImageCapabilityRequest">;
    image_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityImage">;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateImageCapabilityBody = z.infer<typeof CreateImageCapabilityBodySchema>;
/** @deprecated Use CreateImageCapabilityBodySchema. */
export declare const CreateImageCapabilityRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateImageCapabilityRequest">;
    image_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityImage">;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/** @deprecated Use CreateImageCapabilityBody. */
export type CreateImageCapabilityRequest = CreateImageCapabilityBody;
export declare const CreateImageCapabilityResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateImageCapabilityResponse">;
}, z.core.$strip>;
export type CreateImageCapabilityResponse = z.infer<typeof CreateImageCapabilityResponseSchema>;
export declare const GetVideoCapabiltiesRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetVideoCapabiltiesRequest">;
}, z.core.$strip>>;
export type GetVideoCapabiltiesRequest = z.infer<typeof GetVideoCapabiltiesRequestSchema>;
export declare const GetVideoCapabiltiesResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetVideoCapabiltiesResponse">;
    video_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityVideo">;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type GetVideoCapabiltiesResponse = z.infer<typeof GetVideoCapabiltiesResponseSchema>;
export declare const GetAudioCapabiltiesRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetAudioCapabiltiesRequest">;
}, z.core.$strip>>;
export type GetAudioCapabiltiesRequest = z.infer<typeof GetAudioCapabiltiesRequestSchema>;
export declare const GetAudioCapabiltiesResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetAudioCapabiltiesResponse">;
    audio_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityAudio">;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type GetAudioCapabiltiesResponse = z.infer<typeof GetAudioCapabiltiesResponseSchema>;
export declare const GetImageCapabiltiesRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetImageCapabiltiesRequest">;
}, z.core.$strip>>;
export type GetImageCapabiltiesRequest = z.infer<typeof GetImageCapabiltiesRequestSchema>;
export declare const GetImageCapabiltiesResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetImageCapabiltiesResponse">;
    image_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityImage">;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type GetImageCapabiltiesResponse = z.infer<typeof GetImageCapabiltiesResponseSchema>;
export declare const CapDbRequestSchema: z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"CreateVideoCapabilityRequest">;
    video_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityVideo">;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"CreateAudioCapabilityRequest">;
    audio_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityAudio">;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"CreateImageCapabilityRequest">;
    image_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityImage">;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetVideoCapabiltiesRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetAudioCapabiltiesRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetImageCapabiltiesRequest">;
}, z.core.$strip>>]>;
export type CapDbRequest = z.infer<typeof CapDbRequestSchema>;
export declare const CapDbResponseSchema: z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"CreateVideoCapabilityResponse">;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"CreateAudioCapabilityResponse">;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"CreateImageCapabilityResponse">;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetVideoCapabiltiesResponse">;
    video_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityVideo">;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetAudioCapabiltiesResponse">;
    audio_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityAudio">;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetImageCapabiltiesResponse">;
    image_capabilities: z.ZodArray<z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        '@type': z.ZodLiteral<"CapabilityImage">;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"ErrorResponse">;
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>]>;
export type CapDbResponse = z.infer<typeof CapDbResponseSchema>;
export declare const ListCapabilitiesQuerySchema: z.ZodObject<{
    max_results: z.ZodOptional<z.ZodString>;
    next_token: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListCapabilitiesQuery = z.infer<typeof ListCapabilitiesQuerySchema>;
//# sourceMappingURL=api.schema.d.ts.map
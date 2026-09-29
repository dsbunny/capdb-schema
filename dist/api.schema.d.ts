import * as z from "zod";
export declare const CreateVideoCapabilityRequestSchema: z.ZodArray<z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"video">;
    codec: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
}, z.core.$strip>>;
export type CreateVideoCapabilityRequest = z.infer<typeof CreateVideoCapabilityRequestSchema>;
export declare const CreateVideoCapabilityResponseSchema: z.ZodLiteral<"Created">;
export type CreateVideoCapabilityResponse = z.infer<typeof CreateVideoCapabilityResponseSchema>;
export declare const CreateAudioCapabilityRequestSchema: z.ZodArray<z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"audio">;
    codec: z.ZodString;
    sample_rate: z.ZodNumber;
    channels: z.ZodString;
}, z.core.$strip>>;
export type CreateAudioCapabilityRequest = z.infer<typeof CreateAudioCapabilityRequestSchema>;
export declare const CreateAudioCapabilityResponseSchema: z.ZodLiteral<"Created">;
export type CreateAudioCapabilityResponse = z.infer<typeof CreateAudioCapabilityResponseSchema>;
export declare const CreateImageCapabilityRequestSchema: z.ZodArray<z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    mime_type: z.ZodLiteral<"image">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    is_smooth: z.ZodLiteral<false>;
    is_power_efficient: z.ZodLiteral<true>;
}, z.core.$strip>>;
export type CreateImageCapabilityRequest = z.infer<typeof CreateImageCapabilityRequestSchema>;
export declare const CreateImageCapabilityResponseSchema: z.ZodLiteral<"Created">;
export type CreateImageCapabilityResponse = z.infer<typeof CreateImageCapabilityResponseSchema>;
export declare const GetVideoCapabiltiesRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetVideoCapabiltiesRequest = z.infer<typeof GetVideoCapabiltiesRequestSchema>;
export declare const GetVideoCapabiltiesResponseSchema: z.ZodObject<{
    capabilities: z.ZodArray<z.ZodIntersection<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">, z.ZodObject<{
        tenant_id: z.ZodUUID;
        capability_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        row_number: z.ZodNumber;
    }, z.core.$strip>>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type GetVideoCapabiltiesResponse = z.infer<typeof GetVideoCapabiltiesResponseSchema>;
export declare const GetAudioCapabiltiesRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetAudioCapabiltiesRequest = z.infer<typeof GetAudioCapabiltiesRequestSchema>;
export declare const GetAudioCapabiltiesResponseSchema: z.ZodObject<{
    capabilities: z.ZodArray<z.ZodIntersection<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">, z.ZodObject<{
        tenant_id: z.ZodUUID;
        capability_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        row_number: z.ZodNumber;
    }, z.core.$strip>>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type GetAudioCapabiltiesResponse = z.infer<typeof GetAudioCapabiltiesResponseSchema>;
export declare const GetImageCapabiltiesRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetImageCapabiltiesRequest = z.infer<typeof GetImageCapabiltiesRequestSchema>;
export declare const GetImageCapabiltiesResponseSchema: z.ZodObject<{
    capabilities: z.ZodArray<z.ZodIntersection<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">, z.ZodObject<{
        tenant_id: z.ZodUUID;
        capability_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        row_number: z.ZodNumber;
    }, z.core.$strip>>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type GetImageCapabiltiesResponse = z.infer<typeof GetImageCapabiltiesResponseSchema>;
export declare const CapDbRequestSchema: z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"video">;
    codec: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
}, z.core.$strip>>, z.ZodArray<z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"audio">;
    codec: z.ZodString;
    sample_rate: z.ZodNumber;
    channels: z.ZodString;
}, z.core.$strip>>, z.ZodArray<z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    mime_type: z.ZodLiteral<"image">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    is_smooth: z.ZodLiteral<false>;
    is_power_efficient: z.ZodLiteral<true>;
}, z.core.$strip>>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>]>;
export type CapDbRequest = z.infer<typeof CapDbRequestSchema>;
export declare const CapDbResponseSchema: z.ZodUnion<readonly [z.ZodLiteral<"Created">, z.ZodLiteral<"Created">, z.ZodLiteral<"Created">, z.ZodObject<{
    capabilities: z.ZodArray<z.ZodIntersection<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">, z.ZodObject<{
        tenant_id: z.ZodUUID;
        capability_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        row_number: z.ZodNumber;
    }, z.core.$strip>>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    capabilities: z.ZodArray<z.ZodIntersection<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">, z.ZodObject<{
        tenant_id: z.ZodUUID;
        capability_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        row_number: z.ZodNumber;
    }, z.core.$strip>>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    capabilities: z.ZodArray<z.ZodIntersection<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">, z.ZodObject<{
        tenant_id: z.ZodUUID;
        capability_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        row_number: z.ZodNumber;
    }, z.core.$strip>>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>]>;
export type CapDbResponse = z.infer<typeof CapDbResponseSchema>;

import * as z from "zod";
export declare const CapabilityBaseSchema: z.ZodObject<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
}, z.core.$strip>;
export type CapabilityBase = z.infer<typeof CapabilityBaseSchema>;
export declare const CapabilityVideoSchema: z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"video">;
    codec: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
}, z.core.$strip>;
export type CapabilityVideo = z.infer<typeof CapabilityVideoSchema>;
export declare const CapabilityAudioSchema: z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"audio">;
    codec: z.ZodString;
    sample_rate: z.ZodNumber;
    channels: z.ZodString;
}, z.core.$strip>;
export type CapabilityAudio = z.infer<typeof CapabilityAudioSchema>;
export declare const CapabilityImageSchema: z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    mime_type: z.ZodLiteral<"image">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    is_smooth: z.ZodLiteral<false>;
    is_power_efficient: z.ZodLiteral<true>;
}, z.core.$strip>;
export type CapabilityImage = z.infer<typeof CapabilityImageSchema>;
export declare const CapabilityMetadataSchema: z.ZodObject<{
    tenant_id: z.ZodUUID;
    capability_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    row_number: z.ZodNumber;
}, z.core.$strip>;
export declare const CapabilityTypesSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strip>], "mime_type">;
export type CapabilityTypes = z.infer<typeof CapabilityTypesSchema>;
export declare const CapabilitySchema: z.ZodIntersection<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strip>>;
export type Capability = z.infer<typeof CapabilitySchema>;

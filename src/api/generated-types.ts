
export interface paths {
    "/api/frames/{id}/chores/{date}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                date: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["deleteApiFramesByIdChoresByDate"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/categories/{id1}/family_member": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get?: never;
        put: operations["putApiFramesByIdCategoriesFamilyMember"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/avatars": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getApiAvatars"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/colors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getApiColors"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getApiFrames"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/albums": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdAlbums"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/auto_creation_intents/{id1}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdAutoCreationIntents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/calendar_events": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdCalendarEvents"];
        put?: never;
        post: operations["postApiFramesByIdCalendarEvents"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/calendar_events/{id1}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get?: never;
        put: operations["putApiFramesByIdCalendarEvents"];
        post?: never;
        delete: operations["deleteApiFramesByIdCalendarEvents"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/categories": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdCategories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/categories/{id1}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdCategoriesById"];
        put: operations["putApiFramesByIdCategories"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/chores": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdChores"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/chores/{id1}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get?: never;
        put: operations["putApiFramesByIdChores"];
        post?: never;
        delete: operations["deleteApiFramesByIdChores"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/chores/{id1}/completions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get?: never;
        put: operations["putApiFramesByIdChoresCompletions"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/chores/all": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdChoresAll"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/chores/create_multiple": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["postApiFramesByIdChoresCreateMultiple"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/devices": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdDevices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/event_notification_settings": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdEventNotificationSettings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/household_config": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdHouseholdConfig"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/lists": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdLists"];
        put?: never;
        post: operations["postApiFramesByIdLists"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/lists/{id1}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdListsById"];
        put: operations["putApiFramesByIdLists"];
        post?: never;
        delete: operations["deleteApiFramesByIdLists"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/lists/{id1}/list_items": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["postApiFramesByIdListsListItems"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/lists/{id1}/list_items/{id2}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
                id2: number;
            };
            cookie?: never;
        };
        get?: never;
        put: operations["putApiFramesByIdListsListItems"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/lists/{id1}/list_items/bulk_destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["deleteApiFramesByIdListsListItemsBulkDestroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/lists/{id1}/list_items/bulk_update_section": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get?: never;
        put: operations["putApiFramesByIdListsListItemsBulkUpdateSection"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/meals/categories": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdMealsCategories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/meals/recipes": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdMealsRecipes"];
        put?: never;
        post: operations["postApiFramesByIdMealsRecipes"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/meals/recipes/{id1}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdMealsRecipesById"];
        put?: never;
        post?: never;
        delete: operations["deleteApiFramesByIdMealsRecipes"];
        options?: never;
        head?: never;
        patch: operations["patchApiFramesByIdMealsRecipes"];
        trace?: never;
    };
    "/api/frames/{id}/meals/recipes/{id1}/add_to_grocery_list": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["postApiFramesByIdMealsRecipesAddToGroceryList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/meals/sittings": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdMealsSittings"];
        put?: never;
        post: operations["postApiFramesByIdMealsSittings"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/meals/sittings/{id1}/instances": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdMealsSittingsInstances"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/meals/sittings/{id1}/instances/{date}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
                date: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["deleteApiFramesByIdMealsSittingsInstancesByDate"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdMessages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/messages/{id1}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdMessagesById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/messages/{id1}/all_likes": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdMessagesAllLikes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/messages/{id1}/comments": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdMessagesComments"];
        put?: never;
        post: operations["postApiFramesByIdMessagesComments"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/messages/{id1}/likes": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["postApiFramesByIdMessagesLikes"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/reward_points": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdRewardPoints"];
        put?: never;
        post: operations["postApiFramesByIdRewardPoints"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/rewards": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdRewards"];
        put?: never;
        post: operations["postApiFramesByIdRewards"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/rewards/{id1}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdRewardsById"];
        put?: never;
        post?: never;
        delete: operations["deleteApiFramesByIdRewards"];
        options?: never;
        head?: never;
        patch: operations["patchApiFramesByIdRewards"];
        trace?: never;
    };
    "/api/frames/{id}/rewards/{id1}/redeem": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["postApiFramesByIdRewardsRedeem"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/rewards/{id1}/unredeem": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                id1: number;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["postApiFramesByIdRewardsUnredeem"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/source_calendars": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdSourceCalendars"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/task_box/items": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdTaskBoxItems"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/{id}/task_notification_settings": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        get: operations["getApiFramesByIdTaskNotificationSettings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/calendar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getApiFramesCalendar"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/photo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getApiFramesPhoto"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frames/tv": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getApiFramesTv"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/messages/cloud_upload_credentials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getApiMessagesCloudUploadCredentials"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/messages/uploads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["postApiMessagesUploads"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/plus_access": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getApiPlusAccess"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/plus_permissions/share_plus": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["postApiPlusPermissionsSharePlus"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/reminder_profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getApiReminderProfile"];
        put: operations["putApiReminderProfile"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getApiUser"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    putApiFramesByIdCalendarEvents: {
        parameters: {
            query?: never;
            header?: {
                priority?: string;
                "sec-gpc"?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    all_day?: boolean;
                    category_ids?: string[];
                    countdown_enabled?: boolean;
                    description?: string;
                    ends_at?: string;
                    event_notification_setting_attributes?: unknown;
                    invited_emails?: unknown[];
                    lat?: unknown;
                    lng?: unknown;
                    location?: string;
                    rrule?: string[] | null;
                    starts_at?: string;
                    summary?: string;
                    timezone?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "x-content-type-options"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                all_day?: boolean;
                                calendar_id?: string;
                                countdown_enabled?: boolean;
                                description?: string;
                                editable?: boolean;
                                ends_at?: string;
                                invited_emails?: unknown[];
                                kind?: string;
                                lat?: unknown;
                                lng?: unknown;
                                location?: unknown;
                                master_event_id?: unknown;
                                owner_email?: string;
                                recurring?: boolean;
                                recurring_config?: boolean;
                                rrule?: string[] | null;
                                source?: string;
                                starts_at?: string;
                                status?: string;
                                summary?: string;
                                timezone?: unknown;
                                uid?: string;
                            };
                            id?: string;
                            relationships?: {
                                calendar_account?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                event_notification_setting?: {
                                    data?: unknown;
                                };
                            };
                            type?: string;
                        };
                        included?: {
                            attributes?: {
                                active_calendars?: {
                                    editable?: boolean;
                                    id?: string;
                                    name?: string;
                                    role?: string;
                                }[];
                                color?: string;
                                email?: string;
                                id?: number;
                                label?: string;
                                linked_to_profile?: boolean;
                                profile_pic_url?: string;
                                provider?: string;
                                selected_for_chore_chart?: boolean;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    postApiFramesByIdMealsRecipes: {
        parameters: {
            query?: {
                include?: string;
            };
            header?: {
                priority?: string;
                "sec-gpc"?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    description?: string;
                    meal_category_id?: string;
                    summary?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "x-content-type-options"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: string;
                                summary?: string;
                            };
                            id?: string;
                            relationships?: {
                                meal_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        };
                        included?: {
                            attributes?: {
                                color?: string;
                                enabled?: boolean;
                                label?: string;
                                position?: number;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    patchApiFramesByIdMealsRecipes: {
        parameters: {
            query?: {
                include?: string;
            };
            header?: {
                priority?: string;
                "sec-gpc"?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    categoryId?: string;
                    description?: string;
                    meal_category_id?: string;
                    summary?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "x-content-type-options"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: string;
                                summary?: string;
                            };
                            id?: string;
                            relationships?: {
                                meal_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        };
                        included?: {
                            attributes?: {
                                color?: string;
                                enabled?: boolean;
                                label?: string;
                                position?: number;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    deleteApiFramesByIdMealsRecipes: {
        parameters: {
            query?: {
                apply_to_sittings?: string;
            };
            header?: {
                priority?: string;
                "sec-gpc"?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "x-content-type-options"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: {
                            deleted_sitting_ids?: unknown[];
                        };
                    };
                };
            };
        };
    };
    deleteApiFramesByIdChoresByDate: {
        parameters: {
            query?: {
                apply_to?: string;
            };
            header?: {
                priority?: string;
                "sec-gpc"?: string;
            };
            path: {
                id: string;
                date: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "x-content-type-options"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    putApiFramesByIdCategoriesFamilyMember: {
        parameters: {
            query?: never;
            header?: {
                priority?: string;
                "sec-gpc"?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    birthday?: string;
                    dietary_preferences?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "x-content-type-options"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                birthday?: string;
                                dietary_preferences?: string;
                            };
                            id?: string;
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    getApiAvatars: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                display_position?: number | null;
                                image_url?: string;
                                kind?: string;
                                name?: string;
                                reward_animations?: {
                                    asset_url?: string;
                                    cache_key?: string;
                                    landscape_layout?: string;
                                    message?: string;
                                    portrait_layout?: string;
                                }[];
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    getApiColors: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            hex?: string;
                            name?: string;
                        }[];
                    };
                };
            };
        };
    };
    getApiFrames: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                access?: string;
                                activated?: boolean;
                                activated_at?: string;
                                apps?: string[];
                                assistant_household_id?: unknown;
                                blur_effect?: boolean;
                                brightness?: number;
                                current_album_id?: number;
                                currently_sleeping?: boolean;
                                destroyed_at?: unknown;
                                feature_bundle?: {
                                    albums?: {
                                        enabled?: boolean;
                                    };
                                    app_slideshow?: {
                                        enabled?: boolean;
                                    };
                                    bundle_name?: string;
                                    bundle_names?: string[];
                                    captions?: {
                                        enabled?: boolean;
                                    };
                                    chores?: {
                                        enabled?: boolean;
                                    };
                                    countdowns?: {
                                        enabled?: boolean;
                                    };
                                    dinner_plans?: {
                                        enabled?: boolean;
                                    };
                                    disney?: {
                                        enabled?: boolean;
                                    };
                                    doodles?: {
                                        enabled?: boolean;
                                    };
                                    greeting_cards?: {
                                        enabled?: boolean;
                                    };
                                    habit_tracking?: {
                                        enabled?: boolean;
                                    };
                                    lists?: {
                                        enabled?: boolean;
                                    };
                                    magic_import?: {
                                        enabled?: boolean;
                                    };
                                    meal_planning?: {
                                        enabled?: boolean;
                                        unsupported_hardware?: boolean;
                                    };
                                    nudges?: {
                                        enabled?: boolean;
                                    };
                                    photos?: {
                                        enabled?: boolean;
                                    };
                                    recipes?: {
                                        enabled?: boolean;
                                    };
                                    remote_settings?: {
                                        enabled?: boolean;
                                    };
                                    rewards?: {
                                        enabled?: boolean;
                                        unsupported_hardware?: boolean;
                                    };
                                    screensaver?: {
                                        enabled?: boolean;
                                    };
                                    sidekick?: {
                                        enabled?: boolean;
                                    };
                                    timers?: {
                                        enabled?: boolean;
                                    };
                                    videos?: {
                                        enabled?: boolean;
                                    };
                                };
                                gift_recipient_name?: unknown;
                                gift_status?: string;
                                household_name?: unknown;
                                message_viewability?: string;
                                mine?: boolean;
                                name?: string;
                                notification_email?: string;
                                open_to_public?: boolean;
                                plus?: boolean;
                                share_token?: string;
                                show_caption?: boolean;
                                show_heart?: boolean;
                                side_by_side?: boolean;
                                sleep_mode_on?: boolean;
                                sleeps_at?: string;
                                slideshow_speed?: number;
                                slideshow_style?: number;
                                start_sound?: boolean;
                                timezone?: string;
                                trial_expires_at?: unknown;
                                trialing?: boolean;
                                user_created_at?: string;
                                wakes_at?: string;
                            };
                            id?: string;
                            relationships?: {
                                devices?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                                event_notification_setting?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                user?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        }[];
                        included?: {
                            attributes?: {
                                activated?: boolean;
                                blur_effect?: boolean;
                                brightness?: number;
                                category_id?: unknown;
                                current_album_id?: number;
                                currently_sleeping?: boolean;
                                name?: string;
                                nightlight?: boolean;
                                nightlight_brightness?: number;
                                role?: unknown;
                                show_caption?: boolean;
                                show_heart?: boolean;
                                side_by_side?: boolean;
                                sleep_mode?: string;
                                sleep_mode_on?: boolean;
                                sleep_sound?: unknown;
                                sleep_sound_volume?: number;
                                sleeps_at?: string;
                                slideshow_speed?: number;
                                slideshow_style?: number;
                                start_sound?: boolean;
                                timezone?: string;
                                wakes_at?: string;
                            };
                            id?: string;
                            type?: string;
                        }[];
                        meta?: {
                            bulk_features?: boolean;
                            trial_days_remaining?: unknown;
                        };
                    };
                };
            };
        };
    };
    getApiFramesById: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                access?: string;
                                activated?: boolean;
                                activated_at?: string;
                                apps?: string[];
                                assistant_household_id?: unknown;
                                blur_effect?: boolean;
                                brightness?: number;
                                current_album_id?: number;
                                currently_sleeping?: boolean;
                                destroyed_at?: unknown;
                                feature_bundle?: {
                                    albums?: {
                                        enabled?: boolean;
                                    };
                                    app_slideshow?: {
                                        enabled?: boolean;
                                    };
                                    bundle_name?: string;
                                    bundle_names?: string[];
                                    captions?: {
                                        enabled?: boolean;
                                    };
                                    chores?: {
                                        enabled?: boolean;
                                    };
                                    countdowns?: {
                                        enabled?: boolean;
                                    };
                                    dinner_plans?: {
                                        enabled?: boolean;
                                    };
                                    disney?: {
                                        enabled?: boolean;
                                    };
                                    doodles?: {
                                        enabled?: boolean;
                                    };
                                    greeting_cards?: {
                                        enabled?: boolean;
                                    };
                                    habit_tracking?: {
                                        enabled?: boolean;
                                    };
                                    lists?: {
                                        enabled?: boolean;
                                    };
                                    magic_import?: {
                                        enabled?: boolean;
                                    };
                                    meal_planning?: {
                                        enabled?: boolean;
                                        unsupported_hardware?: boolean;
                                    };
                                    nudges?: {
                                        enabled?: boolean;
                                    };
                                    photos?: {
                                        enabled?: boolean;
                                    };
                                    recipes?: {
                                        enabled?: boolean;
                                    };
                                    remote_settings?: {
                                        enabled?: boolean;
                                    };
                                    rewards?: {
                                        enabled?: boolean;
                                        unsupported_hardware?: boolean;
                                    };
                                    screensaver?: {
                                        enabled?: boolean;
                                    };
                                    sidekick?: {
                                        enabled?: boolean;
                                    };
                                    timers?: {
                                        enabled?: boolean;
                                    };
                                    videos?: {
                                        enabled?: boolean;
                                    };
                                };
                                gift_recipient_name?: unknown;
                                gift_status?: string;
                                hardware_model?: string;
                                household_name?: unknown;
                                message_viewability?: string;
                                mine?: boolean;
                                name?: string;
                                notification_email?: string;
                                open_to_public?: boolean;
                                owner_birthday?: unknown;
                                owner_name?: string;
                                plus?: boolean;
                                share_token?: string;
                                show_caption?: boolean;
                                show_heart?: boolean;
                                side_by_side?: boolean;
                                sleep_mode_on?: boolean;
                                sleeps_at?: string;
                                slideshow_speed?: number;
                                slideshow_style?: number;
                                start_sound?: boolean;
                                timezone?: string;
                                trial_expires_at?: unknown;
                                trialing?: boolean;
                                user_created_at?: string;
                                wakes_at?: string;
                            };
                            id?: string;
                            relationships?: {
                                devices?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                                event_notification_setting?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                profile?: {
                                    data?: unknown;
                                };
                                user?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        };
                        included?: {
                            attributes?: {
                                activated?: boolean;
                                blur_effect?: boolean;
                                brightness?: number;
                                category_id?: unknown;
                                current_album_id?: number;
                                currently_sleeping?: boolean;
                                name?: string;
                                nightlight?: boolean;
                                nightlight_brightness?: number;
                                role?: unknown;
                                show_caption?: boolean;
                                show_heart?: boolean;
                                side_by_side?: boolean;
                                sleep_mode?: string;
                                sleep_mode_on?: boolean;
                                sleep_sound?: unknown;
                                sleep_sound_volume?: number;
                                sleeps_at?: string;
                                slideshow_speed?: number;
                                slideshow_style?: number;
                                start_sound?: boolean;
                                timezone?: string;
                                wakes_at?: string;
                            };
                            id?: string;
                            type?: string;
                        }[];
                        meta?: {
                            ab_test_group?: string;
                            bulk_features?: boolean;
                            trial_days_remaining?: unknown;
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdAlbums: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: unknown[];
                    };
                };
            };
        };
    };
    getApiFramesByIdAutoCreationIntents: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                attachment_put_url?: unknown;
                                created_at?: string;
                                created_via?: string;
                                engine?: string;
                                external_result_url?: unknown;
                                label?: string | null;
                                result?: {
                                    items?: {
                                        label?: string;
                                        section?: string;
                                    }[];
                                } | null;
                                status?: string;
                            };
                            id?: string;
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdCalendarEvents: {
        parameters: {
            query?: {
                date_min?: string;
                date_max?: string;
                timezone?: string;
                include?: string;
            };
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                all_day?: boolean;
                                calendar_id?: string | null;
                                countdown_enabled?: boolean;
                                description?: string | null;
                                editable?: boolean;
                                ends_at?: string;
                                invited_emails?: ("user@example.com" | null)[];
                                kind?: string;
                                lat?: unknown;
                                lng?: unknown;
                                location?: string | null;
                                master_event_id?: ("user@example.com" | null) | (string | null);
                                owner_email?: "user@example.com" | null;
                                recurring?: boolean;
                                recurring_config?: boolean;
                                rrule?: string[] | null;
                                source?: string;
                                starts_at?: string;
                                status?: string;
                                summary?: string;
                                supports_notification_settings?: boolean;
                                timezone?: "America/Los_Angeles" | "UTC" | "America/Chicago" | "America/Denver" | null;
                                uid?: string;
                            };
                            id?: string;
                            relationships?: {
                                calendar_account?: {
                                    data?: unknown;
                                };
                                categories?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                                event_notification_setting?: {
                                    data?: unknown;
                                };
                            };
                            type?: string;
                        }[];
                        included?: {
                            attributes?: {
                                color?: string;
                                id?: number;
                                label?: string;
                                linked_to_profile?: boolean;
                                selected_for_chore_chart?: boolean;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    postApiFramesByIdCalendarEvents: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    all_day?: boolean;
                    calendar_account_id?: unknown;
                    calendar_id?: unknown;
                    category_ids?: string[];
                    countdown_enabled?: boolean;
                    description?: string;
                    ends_at?: string;
                    invited_emails?: unknown[];
                    kind?: string;
                    lat?: unknown;
                    lng?: unknown;
                    location?: string;
                    rrule?: unknown;
                    starts_at?: string;
                    summary?: string;
                    timezone?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                all_day?: boolean;
                                calendar_id?: unknown;
                                countdown_enabled?: boolean;
                                description?: string;
                                editable?: boolean;
                                ends_at?: string;
                                invited_emails?: unknown[];
                                kind?: string;
                                lat?: unknown;
                                lng?: unknown;
                                location?: string;
                                master_event_id?: unknown;
                                owner_email?: string;
                                recurring?: boolean;
                                recurring_config?: boolean;
                                rrule?: unknown;
                                source?: string;
                                starts_at?: string;
                                status?: string;
                                summary?: string;
                                supports_notification_settings?: boolean;
                                timezone?: string;
                                uid?: string;
                            };
                            id?: string;
                            relationships?: {
                                calendar_account?: {
                                    data?: unknown;
                                };
                                category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                event_notification_setting?: {
                                    data?: unknown;
                                };
                            };
                            type?: string;
                        };
                        included?: {
                            attributes?: {
                                color?: string;
                                id?: number;
                                label?: string;
                                linked_to_profile?: boolean;
                                selected_for_chore_chart?: boolean;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    deleteApiFramesByIdCalendarEvents: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: {
                            destroyed_id?: string;
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdCategories: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                color?: string;
                                id?: number;
                                label?: string;
                                linked_to_profile?: boolean;
                                profile_picture_urls?: {
                                    large?: string | null;
                                    medium?: string | null;
                                    original?: string | null;
                                    small?: string | null;
                                    xl?: string | null;
                                };
                                selected_for_chore_chart?: boolean;
                            };
                            id?: string;
                            relationships?: {
                                avatar?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    } | null;
                                };
                                family_member?: {
                                    data?: unknown;
                                };
                                source_calendar_categorizations?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                                source_calendars?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                            };
                            type?: string;
                        }[];
                        included?: {
                            attributes?: {
                                display_position?: number | null;
                                image_url?: string;
                                kind?: string;
                                name?: string;
                                reward_animations?: {
                                    asset_url?: string;
                                    cache_key?: string;
                                    landscape_layout?: string;
                                    message?: string;
                                    portrait_layout?: string;
                                }[];
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    getApiFramesByIdCategoriesById: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                color?: string;
                                id?: number;
                                label?: string;
                                linked_to_profile?: boolean;
                                profile_picture_urls?: {
                                    large?: string | null;
                                    medium?: string | null;
                                    original?: string | null;
                                    small?: string | null;
                                    xl?: string | null;
                                };
                                selected_for_chore_chart?: boolean;
                            };
                            id?: string;
                            relationships?: {
                                avatar?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    } | null;
                                };
                                family_member?: {
                                    data?: unknown;
                                };
                                source_calendar_categorizations?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                                source_calendars?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                            };
                            type?: string;
                        };
                        included?: {
                            attributes?: {
                                category_id?: number;
                                color_hex?: unknown;
                                default_for_new_events?: boolean;
                                kind?: string;
                                label?: string;
                                role?: string;
                                source_calendar_id?: number;
                                source_color_id?: unknown;
                                source_id?: string;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    putApiFramesByIdCategories: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    avatar_id?: string;
                    color?: string;
                    label?: string;
                    linked_to_profile?: boolean;
                    profile_picture?: unknown;
                    selected_for_chore_chart?: boolean;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                color?: string;
                                id?: number;
                                label?: string;
                                linked_to_profile?: boolean;
                                profile_picture_urls?: {
                                    large?: string;
                                    medium?: string;
                                    original?: string;
                                    small?: string;
                                    xl?: string;
                                };
                                selected_for_chore_chart?: boolean;
                            };
                            id?: string;
                            relationships?: {
                                avatar?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                family_member?: {
                                    data?: unknown;
                                };
                                source_calendar_categorizations?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                                source_calendars?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                            };
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdChores: {
        parameters: {
            query?: {
                after?: string;
                before?: string;
                include_late?: string;
                include_up_for_grabs?: string;
                filter?: string;
            };
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                completed_on?: string | null;
                                description?: "Mom will treat dermatitis on legs with bee cream/lotion " | "Walk around the house with a basket and then put things away" | "Talk to Mom for 10 Minutes" | "test" | "Testing" | null;
                                emoji_icon?: string | null;
                                group?: string;
                                id?: number | string;
                                original_start?: string;
                                position?: number;
                                recurrence_set?: string[] | null;
                                recurring?: boolean;
                                recurring_until?: string | null;
                                renewal_interval?: unknown;
                                renewal_unit?: unknown;
                                reward_points?: number | null;
                                routine?: boolean;
                                series?: string;
                                start?: string;
                                start_time?: "20:00" | "19:00" | "18:30" | "14:00" | "06:00" | "08:00" | "11:07" | "15:30" | null;
                                status?: string;
                                summary?: string;
                                timer_seconds?: unknown;
                                up_for_grabs?: boolean;
                            };
                            id?: string;
                            relationships?: {
                                category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    } | null;
                                };
                                completed_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    } | null;
                                };
                                habit_tracker?: {
                                    data?: unknown;
                                };
                                linked_task_group?: {
                                    data?: unknown;
                                };
                            };
                            type?: string;
                        }[];
                        included?: {
                            attributes?: {
                                color?: string;
                                id?: number;
                                label?: string;
                                linked_to_profile?: boolean;
                                selected_for_chore_chart?: boolean;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    putApiFramesByIdChores: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    summary?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                completed_on?: unknown;
                                description?: string;
                                emoji_icon?: unknown;
                                group?: string;
                                id?: number;
                                original_start?: string;
                                position?: number;
                                recurrence_set?: string[];
                                recurring?: boolean;
                                recurring_until?: unknown;
                                renewal_interval?: unknown;
                                renewal_unit?: unknown;
                                reward_points?: number;
                                routine?: boolean;
                                series?: string;
                                start?: string;
                                start_time?: unknown;
                                status?: string;
                                summary?: string;
                                timer_seconds?: unknown;
                                up_for_grabs?: boolean;
                            };
                            id?: string;
                            relationships?: {
                                category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                completed_category?: {
                                    data?: unknown;
                                };
                                habit_tracker?: {
                                    data?: unknown;
                                };
                                linked_task_group?: {
                                    data?: unknown;
                                };
                            };
                            type?: string;
                        };
                        included?: {
                            attributes?: {
                                color?: string;
                                id?: number;
                                label?: string;
                                linked_to_profile?: boolean;
                                selected_for_chore_chart?: boolean;
                            };
                            id?: string;
                            type?: string;
                        }[];
                        meta?: {
                            reward_points?: {
                                category_id?: number;
                                chores_completed_with_rewards_count?: number;
                                current_point_balance?: number;
                                lifetime_points_earned?: number;
                            };
                        };
                    };
                };
            };
        };
    };
    deleteApiFramesByIdChores: {
        parameters: {
            query?: {
                apply_to?: string;
            };
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    putApiFramesByIdChoresCompletions: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    category_id?: string;
                    instance_date?: string;
                    instance_time?: string;
                    status?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                completed_on?: string | null;
                                description?: string | null;
                                emoji_icon?: string | null;
                                group?: string;
                                id?: number | string;
                                original_start?: string;
                                position?: number;
                                recurrence_set?: string[];
                                recurring?: boolean;
                                recurring_until?: unknown;
                                renewal_interval?: unknown;
                                renewal_unit?: unknown;
                                reward_points?: number | null;
                                routine?: boolean;
                                series?: string;
                                start?: string;
                                start_time?: string | null;
                                status?: string;
                                summary?: string;
                                timer_seconds?: unknown;
                                up_for_grabs?: boolean;
                            };
                            id?: string;
                            relationships?: {
                                category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    } | null;
                                };
                                completed_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    } | null;
                                };
                                habit_tracker?: {
                                    data?: unknown;
                                };
                                linked_task_group?: {
                                    data?: unknown;
                                };
                            };
                            type?: string;
                        };
                        included?: {
                            attributes?: {
                                color?: string;
                                id?: number;
                                label?: string;
                                linked_to_profile?: boolean;
                                selected_for_chore_chart?: boolean;
                            };
                            id?: string;
                            type?: string;
                        }[];
                        meta?: {
                            milestones_achieved?: unknown[];
                            reward_points?: {
                                category_id?: number;
                                chores_completed_with_rewards_count?: number;
                                current_point_balance?: number;
                                lifetime_points_earned?: number;
                            } | null;
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdChoresAll: {
        parameters: {
            query?: {
                include_up_for_grabs?: string;
            };
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        chores?: {
                            any_day?: {
                                data?: unknown[];
                                included?: unknown[];
                            };
                            future?: {
                                data?: {
                                    attributes?: {
                                        completed_on?: unknown;
                                        description?: string | null;
                                        emoji_icon?: string;
                                        group?: string;
                                        id?: string;
                                        original_start?: string;
                                        position?: number;
                                        recurrence_set?: string[];
                                        recurring?: boolean;
                                        recurring_until?: unknown;
                                        renewal_interval?: unknown;
                                        renewal_unit?: unknown;
                                        reward_points?: number | null;
                                        routine?: boolean;
                                        series?: string;
                                        start?: string;
                                        start_time?: string | null;
                                        status?: string;
                                        summary?: string;
                                        timer_seconds?: unknown;
                                        up_for_grabs?: boolean;
                                    };
                                    id?: string;
                                    relationships?: {
                                        category?: {
                                            data?: {
                                                id?: string;
                                                type?: string;
                                            } | null;
                                        };
                                        completed_category?: {
                                            data?: unknown;
                                        };
                                        habit_tracker?: {
                                            data?: unknown;
                                        };
                                        linked_task_group?: {
                                            data?: unknown;
                                        };
                                    };
                                    type?: string;
                                }[];
                                included?: {
                                    attributes?: {
                                        color?: string;
                                        id?: number;
                                        label?: string;
                                        linked_to_profile?: boolean;
                                        selected_for_chore_chart?: boolean;
                                    };
                                    id?: string;
                                    type?: string;
                                }[];
                            };
                            late?: {
                                data?: unknown[];
                                included?: unknown[];
                            };
                            today?: {
                                data?: {
                                    attributes?: {
                                        completed_on?: unknown;
                                        description?: string | null;
                                        emoji_icon?: string;
                                        group?: string;
                                        id?: string;
                                        original_start?: string;
                                        position?: number;
                                        recurrence_set?: string[];
                                        recurring?: boolean;
                                        recurring_until?: unknown;
                                        renewal_interval?: unknown;
                                        renewal_unit?: unknown;
                                        reward_points?: number | null;
                                        routine?: boolean;
                                        series?: string;
                                        start?: string;
                                        start_time?: unknown;
                                        status?: string;
                                        summary?: string;
                                        timer_seconds?: unknown;
                                        up_for_grabs?: boolean;
                                    };
                                    id?: string;
                                    relationships?: {
                                        category?: {
                                            data?: {
                                                id?: string;
                                                type?: string;
                                            } | null;
                                        };
                                        completed_category?: {
                                            data?: unknown;
                                        };
                                        habit_tracker?: {
                                            data?: unknown;
                                        };
                                        linked_task_group?: {
                                            data?: unknown;
                                        };
                                    };
                                    type?: string;
                                }[];
                                included?: {
                                    attributes?: {
                                        color?: string;
                                        id?: number;
                                        label?: string;
                                        linked_to_profile?: boolean;
                                        selected_for_chore_chart?: boolean;
                                    };
                                    id?: string;
                                    type?: string;
                                }[];
                            };
                            today_timed?: {
                                data?: {
                                    attributes?: {
                                        completed_on?: unknown;
                                        description?: unknown;
                                        emoji_icon?: string;
                                        group?: string;
                                        id?: string;
                                        original_start?: string;
                                        position?: number;
                                        recurrence_set?: string[];
                                        recurring?: boolean;
                                        recurring_until?: unknown;
                                        renewal_interval?: unknown;
                                        renewal_unit?: unknown;
                                        reward_points?: number | null;
                                        routine?: boolean;
                                        series?: string;
                                        start?: string;
                                        start_time?: string;
                                        status?: string;
                                        summary?: string;
                                        timer_seconds?: unknown;
                                        up_for_grabs?: boolean;
                                    };
                                    id?: string;
                                    relationships?: {
                                        category?: {
                                            data?: {
                                                id?: string;
                                                type?: string;
                                            } | null;
                                        };
                                        completed_category?: {
                                            data?: unknown;
                                        };
                                        habit_tracker?: {
                                            data?: unknown;
                                        };
                                        linked_task_group?: {
                                            data?: unknown;
                                        };
                                    };
                                    type?: string;
                                }[];
                                included?: {
                                    attributes?: {
                                        color?: string;
                                        id?: number;
                                        label?: string;
                                        linked_to_profile?: boolean;
                                        selected_for_chore_chart?: boolean;
                                    };
                                    id?: string;
                                    type?: string;
                                }[];
                            };
                        };
                        routines?: {
                            any_day?: {
                                data?: unknown[];
                                included?: unknown[];
                            };
                            future?: {
                                data?: {
                                    attributes?: {
                                        completed_on?: unknown;
                                        description?: unknown;
                                        emoji_icon?: string;
                                        group?: string;
                                        id?: string;
                                        original_start?: string;
                                        position?: number;
                                        recurrence_set?: string[];
                                        recurring?: boolean;
                                        recurring_until?: unknown;
                                        renewal_interval?: unknown;
                                        renewal_unit?: unknown;
                                        reward_points?: number | null;
                                        routine?: boolean;
                                        series?: string;
                                        start?: string;
                                        start_time?: string;
                                        status?: string;
                                        summary?: string;
                                        timer_seconds?: unknown;
                                        up_for_grabs?: boolean;
                                    };
                                    id?: string;
                                    relationships?: {
                                        category?: {
                                            data?: {
                                                id?: string;
                                                type?: string;
                                            } | null;
                                        };
                                        completed_category?: {
                                            data?: unknown;
                                        };
                                        habit_tracker?: {
                                            data?: unknown;
                                        };
                                        linked_task_group?: {
                                            data?: unknown;
                                        };
                                    };
                                    type?: string;
                                }[];
                                included?: {
                                    attributes?: {
                                        color?: string;
                                        id?: number;
                                        label?: string;
                                        linked_to_profile?: boolean;
                                        selected_for_chore_chart?: boolean;
                                    };
                                    id?: string;
                                    type?: string;
                                }[];
                            };
                            late?: {
                                data?: {
                                    attributes?: {
                                        completed_on?: unknown;
                                        description?: unknown;
                                        emoji_icon?: string;
                                        group?: string;
                                        id?: string;
                                        original_start?: string;
                                        position?: number;
                                        recurrence_set?: string[];
                                        recurring?: boolean;
                                        recurring_until?: unknown;
                                        renewal_interval?: unknown;
                                        renewal_unit?: unknown;
                                        reward_points?: number | null;
                                        routine?: boolean;
                                        series?: string;
                                        start?: string;
                                        start_time?: string;
                                        status?: string;
                                        summary?: string;
                                        timer_seconds?: unknown;
                                        up_for_grabs?: boolean;
                                    };
                                    id?: string;
                                    relationships?: {
                                        category?: {
                                            data?: {
                                                id?: string;
                                                type?: string;
                                            } | null;
                                        };
                                        completed_category?: {
                                            data?: unknown;
                                        };
                                        habit_tracker?: {
                                            data?: unknown;
                                        };
                                        linked_task_group?: {
                                            data?: unknown;
                                        };
                                    };
                                    type?: string;
                                }[];
                                included?: {
                                    attributes?: {
                                        color?: string;
                                        id?: number;
                                        label?: string;
                                        linked_to_profile?: boolean;
                                        selected_for_chore_chart?: boolean;
                                    };
                                    id?: string;
                                    type?: string;
                                }[];
                            };
                            today?: {
                                data?: unknown[];
                                included?: unknown[];
                            };
                            today_timed?: {
                                data?: {
                                    attributes?: {
                                        completed_on?: unknown;
                                        description?: string | null;
                                        emoji_icon?: string | null;
                                        group?: string;
                                        id?: string;
                                        original_start?: string;
                                        position?: number;
                                        recurrence_set?: string[];
                                        recurring?: boolean;
                                        recurring_until?: unknown;
                                        renewal_interval?: unknown;
                                        renewal_unit?: unknown;
                                        reward_points?: number | null;
                                        routine?: boolean;
                                        series?: string;
                                        start?: string;
                                        start_time?: string;
                                        status?: string;
                                        summary?: string;
                                        timer_seconds?: unknown;
                                        up_for_grabs?: boolean;
                                    };
                                    id?: string;
                                    relationships?: {
                                        category?: {
                                            data?: {
                                                id?: string;
                                                type?: string;
                                            } | null;
                                        };
                                        completed_category?: {
                                            data?: unknown;
                                        };
                                        habit_tracker?: {
                                            data?: unknown;
                                        };
                                        linked_task_group?: {
                                            data?: unknown;
                                        };
                                    };
                                    type?: string;
                                }[];
                                included?: {
                                    attributes?: {
                                        color?: string;
                                        id?: number;
                                        label?: string;
                                        linked_to_profile?: boolean;
                                        selected_for_chore_chart?: boolean;
                                    };
                                    id?: string;
                                    type?: string;
                                }[];
                            };
                        };
                    };
                };
            };
        };
    };
    postApiFramesByIdChoresCreateMultiple: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    category_ids?: string[];
                    description?: string;
                    recurrence_set?: string[] | null;
                    recurring_until?: unknown;
                    reward_points?: number;
                    routine?: boolean;
                    start?: string;
                    start_time?: unknown;
                    summary?: string;
                    timer_seconds?: unknown;
                    up_for_grabs?: boolean;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                completed_on?: unknown;
                                description?: string;
                                emoji_icon?: unknown;
                                group?: string;
                                id?: number;
                                original_start?: string;
                                position?: number;
                                recurrence_set?: string[] | null;
                                recurring?: boolean;
                                recurring_until?: unknown;
                                renewal_interval?: unknown;
                                renewal_unit?: unknown;
                                reward_points?: number | null;
                                routine?: boolean;
                                series?: string;
                                start?: string;
                                start_time?: unknown;
                                status?: string;
                                summary?: string;
                                timer_seconds?: unknown;
                                up_for_grabs?: boolean;
                            };
                            id?: string;
                            relationships?: {
                                category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    } | null;
                                };
                                completed_category?: {
                                    data?: unknown;
                                };
                                habit_tracker?: {
                                    data?: unknown;
                                };
                                linked_task_group?: {
                                    data?: unknown;
                                };
                            };
                            type?: string;
                        }[];
                        included?: {
                            attributes?: {
                                color?: string;
                                id?: number;
                                label?: string;
                                linked_to_profile?: boolean;
                                selected_for_chore_chart?: boolean;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    getApiFramesByIdDevices: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                activated?: boolean;
                                blur_effect?: boolean;
                                brightness?: number;
                                category_id?: unknown;
                                current_album_id?: number;
                                currently_sleeping?: boolean;
                                name?: string;
                                nightlight?: boolean;
                                nightlight_brightness?: number;
                                role?: unknown;
                                show_caption?: boolean;
                                show_heart?: boolean;
                                side_by_side?: boolean;
                                sleep_mode?: string;
                                sleep_mode_on?: boolean;
                                sleep_sound?: unknown;
                                sleep_sound_volume?: number;
                                sleeps_at?: string;
                                slideshow_speed?: number;
                                slideshow_style?: number;
                                start_sound?: boolean;
                                timezone?: string;
                                wakes_at?: string;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    getApiFramesByIdEventNotificationSettings: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                early?: boolean;
                                early_minutes_before?: unknown;
                                on_time?: boolean;
                                sound_on?: unknown;
                            };
                            id?: unknown;
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdHouseholdConfig: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                disney_profile_pictures?: boolean;
                                disney_screensaver?: boolean;
                            };
                            id?: string;
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdLists: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                color?: string;
                                default_grocery_list?: boolean;
                                hide_on_device?: boolean;
                                kind?: string;
                                label?: string;
                            };
                            id?: string;
                            relationships?: {
                                list_items?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                            };
                            type?: string;
                        }[];
                        included?: {
                            attributes?: {
                                created_at?: string;
                                id?: number;
                                label?: string;
                                position?: number;
                                section?: unknown;
                                status?: string;
                            };
                            id?: string;
                            relationships?: {
                                list?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    postApiFramesByIdLists: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    color?: string;
                    default_grocery_list?: boolean;
                    hide_on_device?: boolean;
                    kind?: string;
                    label?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                color?: string;
                                default_grocery_list?: boolean;
                                hide_on_device?: boolean;
                                kind?: string;
                                label?: string;
                            };
                            id?: string;
                            relationships?: {
                                list_items?: {
                                    data?: unknown[];
                                };
                            };
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdListsById: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                color?: string;
                                default_grocery_list?: boolean;
                                hide_on_device?: boolean;
                                kind?: string;
                                label?: string;
                            };
                            id?: string;
                            relationships?: {
                                list_items?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                            };
                            type?: string;
                        };
                        included?: {
                            attributes?: {
                                created_at?: string;
                                id?: number;
                                label?: string;
                                position?: number;
                                section?: "Section 1" | "Section 2" | null;
                                status?: string;
                            };
                            id?: string;
                            relationships?: {
                                list?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        }[];
                        meta?: {
                            sections?: ("Section 1" | "Section 2" | null)[];
                        };
                    };
                };
            };
        };
    };
    putApiFramesByIdLists: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    color?: string;
                    default_grocery_list?: boolean;
                    hide_on_device?: boolean;
                    kind?: string;
                    label?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                color?: string;
                                default_grocery_list?: boolean;
                                hide_on_device?: boolean;
                                kind?: string;
                                label?: string;
                            };
                            id?: string;
                            relationships?: {
                                list_items?: {
                                    data?: unknown[];
                                };
                            };
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    deleteApiFramesByIdLists: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                color?: string;
                                default_grocery_list?: boolean;
                                hide_on_device?: boolean;
                                kind?: string;
                                label?: string;
                            };
                            id?: string;
                            relationships?: {
                                list_items?: {
                                    data?: unknown[];
                                };
                            };
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    postApiFramesByIdListsListItems: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    label?: string;
                    section?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                created_at?: string;
                                id?: number;
                                label?: string;
                                position?: number;
                                section?: string;
                                status?: string;
                            };
                            id?: string;
                            relationships?: {
                                list?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    putApiFramesByIdListsListItems: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
            };
            path: {
                id: string;
                id1: string;
                id2: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    label?: string;
                    section?: string | null;
                    status?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                created_at?: string;
                                id?: number;
                                label?: string;
                                position?: number;
                                section?: string | null;
                                status?: string;
                            };
                            id?: string;
                            relationships?: {
                                list?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    deleteApiFramesByIdListsListItemsBulkDestroy: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    ids?: string[];
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                color?: string;
                                default_grocery_list?: boolean;
                                hide_on_device?: boolean;
                                kind?: string;
                                label?: string;
                            };
                            id?: string;
                            relationships?: {
                                list_items?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                            };
                            type?: string;
                        };
                        included?: {
                            attributes?: {
                                created_at?: string;
                                id?: number;
                                label?: string;
                                position?: number;
                                section?: string;
                                status?: string;
                            };
                            id?: string;
                            relationships?: {
                                list?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        }[];
                        meta?: {
                            sections?: string[];
                        };
                    };
                };
            };
        };
    };
    putApiFramesByIdListsListItemsBulkUpdateSection: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    item_ids?: string[];
                    section?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                color?: string;
                                default_grocery_list?: boolean;
                                hide_on_device?: boolean;
                                kind?: string;
                                label?: string;
                            };
                            id?: string;
                            relationships?: {
                                list_items?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                            };
                            type?: string;
                        };
                        included?: {
                            attributes?: {
                                created_at?: string;
                                id?: number;
                                label?: string;
                                position?: number;
                                section?: string;
                                status?: string;
                            };
                            id?: string;
                            relationships?: {
                                list?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        }[];
                        meta?: {
                            sections?: string[];
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdMealsCategories: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                color?: string;
                                enabled?: boolean;
                                label?: string;
                                position?: number;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    getApiFramesByIdMealsRecipes: {
        parameters: {
            query?: {
                include?: string;
            };
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: string | null;
                                draft?: boolean;
                                summary?: string;
                            };
                            id?: string;
                            relationships?: {
                                meal_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        }[];
                        included?: {
                            attributes?: {
                                color?: string;
                                enabled?: boolean;
                                label?: string;
                                position?: number;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    getApiFramesByIdMealsRecipesById: {
        parameters: {
            query?: {
                include?: string;
            };
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: string;
                                draft?: boolean;
                                summary?: string;
                            };
                            id?: string;
                            relationships?: {
                                meal_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        };
                        included?: {
                            attributes?: {
                                color?: string;
                                enabled?: boolean;
                                label?: string;
                                position?: number;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    postApiFramesByIdMealsRecipesAddToGroceryList: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: string;
                                draft?: boolean;
                                summary?: string;
                            };
                            id?: string;
                            relationships?: {
                                meal_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        };
                        meta?: {
                            auto_creation_intent_id?: number;
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdMealsSittings: {
        parameters: {
            query?: {
                date_min?: string;
                date_max?: string;
                include?: string;
            };
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: string;
                                draft?: boolean;
                                instances?: string[];
                                note?: string | null;
                                recurring?: boolean;
                                rrule?: unknown;
                                summary?: string;
                            };
                            id?: string;
                            relationships?: {
                                meal_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                meal_recipe?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                profiles?: {
                                    data?: unknown[];
                                };
                            };
                            type?: string;
                        }[];
                        included?: {
                            attributes?: {
                                color?: string;
                                description?: string;
                                draft?: boolean;
                                enabled?: boolean;
                                label?: string;
                                position?: number;
                                summary?: string;
                            };
                            id?: string;
                            relationships?: {
                                meal_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        }[];
                        meta?: {
                            date_max?: string;
                            date_min?: string;
                        };
                    };
                };
            };
        };
    };
    postApiFramesByIdMealsSittings: {
        parameters: {
            query?: {
                date_min?: string;
                date_max?: string;
                include?: string;
            };
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    add_to_grocery_list?: boolean;
                    date?: string;
                    description?: unknown;
                    meal_category_id?: string;
                    meal_recipe_id?: string;
                    note?: string | null;
                    rrule?: unknown;
                    saveToRecipeBox?: boolean;
                    summary?: unknown;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: string;
                                draft?: boolean;
                                instances?: string[];
                                note?: string | null;
                                recurring?: boolean;
                                rrule?: unknown;
                                summary?: string;
                            };
                            id?: string;
                            relationships?: {
                                meal_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                meal_recipe?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                profiles?: {
                                    data?: unknown[];
                                };
                            };
                            type?: string;
                        }[];
                        included?: {
                            attributes?: {
                                color?: string;
                                description?: string;
                                draft?: boolean;
                                enabled?: boolean;
                                label?: string;
                                position?: number;
                                summary?: string;
                            };
                            id?: string;
                            relationships?: {
                                meal_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        }[];
                        meta?: {
                            date_max?: string;
                            date_min?: string;
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdMealsSittingsInstances: {
        parameters: {
            query?: {
                date_min?: string;
                date_max?: string;
                include?: string;
            };
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: string;
                                draft?: boolean;
                                instances?: string[];
                                note?: string | null;
                                recurring?: boolean;
                                rrule?: unknown;
                                summary?: string;
                            };
                            id?: string;
                            relationships?: {
                                meal_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                meal_recipe?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                profiles?: {
                                    data?: unknown[];
                                };
                            };
                            type?: string;
                        }[];
                        included?: {
                            attributes?: {
                                color?: string;
                                description?: string;
                                draft?: boolean;
                                enabled?: boolean;
                                label?: string;
                                position?: number;
                                summary?: string;
                            };
                            id?: string;
                            relationships?: {
                                meal_category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        }[];
                        meta?: {
                            date_max?: string;
                            date_min?: string;
                        };
                    };
                };
            };
        };
    };
    deleteApiFramesByIdMealsSittingsInstancesByDate: {
        parameters: {
            query?: {
                date_min?: string;
                date_max?: string;
                include?: string;
            };
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
                date: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: unknown[];
                        included?: unknown[];
                        meta?: {
                            date_max?: string;
                            date_min?: string;
                            deleted_sitting_ids?: number[];
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdMessages: {
        parameters: {
            query?: {
                page_token?: string;
                sync_token?: string;
            };
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                asset_type?: string;
                                asset_url?: string;
                                created_at?: string;
                                destroyed_at?: unknown;
                                id?: number;
                                sender_id?: number;
                                status?: string;
                                thumbnail_url?: string | null;
                                updated_at?: string;
                            };
                            id?: string;
                            meta?: {
                                plus_gated_content?: {
                                    caption?: boolean;
                                    message?: boolean;
                                };
                            };
                            type?: string;
                        }[];
                        meta?: {
                            current_page_token?: string;
                            has_next?: boolean;
                            next_page_token?: string;
                            next_sync_token?: string;
                            plus_gated_content?: {
                                captions?: boolean;
                                messages?: boolean;
                            };
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdMessagesById: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                asset_bucket?: string;
                                asset_key?: string;
                                asset_type?: string;
                                asset_url?: string;
                                caption?: string;
                                comments_count?: number;
                                created_at?: string;
                                download_token?: string;
                                frame_owner_id?: number;
                                from_email?: string;
                                sender_id?: number;
                                sender_name?: string;
                                thumbnail_key?: unknown;
                                thumbnail_url?: unknown;
                            };
                            id?: string;
                            type?: string;
                        };
                        meta?: {
                            plus_gated_content?: {
                                caption?: boolean;
                                message?: boolean;
                            };
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdMessagesAllLikes: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                created_at?: string;
                                id?: number;
                                message_id?: number;
                                name?: string;
                                profile_id?: number;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    getApiFramesByIdMessagesComments: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                body?: string;
                                comment_owner?: boolean;
                                created_at?: string;
                                user_name?: string;
                            };
                            id?: string;
                            type?: string;
                        }[];
                        meta?: {
                            current_page?: number;
                            num_pages?: number;
                        };
                    };
                };
            };
        };
    };
    postApiFramesByIdMessagesComments: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    body?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                body?: string;
                                comment_owner?: boolean;
                                created_at?: string;
                                user_name?: string;
                            };
                            id?: string;
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    postApiFramesByIdMessagesLikes: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                created_at?: string;
                                id?: number;
                                message_id?: number;
                                name?: string;
                                profile_id?: number;
                            };
                            id?: string;
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdRewardPoints: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        category_id?: number;
                        current_point_balance?: number;
                        lifetime_points_earned?: number;
                    }[];
                };
            };
        };
    };
    postApiFramesByIdRewardPoints: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    category_ids?: string[];
                    points?: number;
                };
            };
        };
        responses: {
            201: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        category_id?: number;
                        current_point_balance?: number;
                        lifetime_points_earned?: number;
                    }[];
                };
            };
        };
    };
    getApiFramesByIdRewards: {
        parameters: {
            query?: {
                redeemed_at_min?: string;
                redeemed_at_max?: string;
            };
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: "Less than 10 minutes" | "Less than 12 minutes" | null;
                                emoji_icon?: string;
                                name?: string;
                                origin?: string;
                                point_value?: number;
                                redeemed_at?: string | null;
                                respawn_on_redemption?: boolean;
                            };
                            id?: string;
                            meta?: {
                                just_redeemed?: boolean;
                                redeemed_by_device_id?: unknown;
                            };
                            relationships?: {
                                category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    postApiFramesByIdRewards: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    category_ids?: string[];
                    description?: string;
                    emoji_icon?: string;
                    name?: string;
                    point_value?: number;
                    respawn_on_redemption?: boolean;
                };
            };
        };
        responses: {
            201: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: string;
                                emoji_icon?: string;
                                name?: string;
                                origin?: string;
                                point_value?: number;
                                redeemed_at?: unknown;
                                respawn_on_redemption?: boolean;
                            };
                            id?: string;
                            meta?: {
                                just_redeemed?: boolean;
                                redeemed_by_device_id?: unknown;
                            };
                            relationships?: {
                                category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    getApiFramesByIdRewardsById: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: string | null;
                                emoji_icon?: string;
                                name?: string;
                                origin?: string;
                                point_value?: number;
                                redeemed_at?: string | null;
                                respawn_on_redemption?: boolean;
                            };
                            id?: string;
                            meta?: {
                                just_redeemed?: boolean;
                                redeemed_by_device_id?: unknown;
                            };
                            relationships?: {
                                category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    deleteApiFramesByIdRewards: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        success?: boolean;
                    };
                };
            };
        };
    };
    patchApiFramesByIdRewards: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    category_id?: string;
                    description?: string;
                    emoji_icon?: string;
                    name?: string;
                    point_value?: number;
                    respawn_on_redemption?: boolean;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: string;
                                emoji_icon?: string;
                                name?: string;
                                origin?: string;
                                point_value?: number;
                                redeemed_at?: unknown;
                                respawn_on_redemption?: boolean;
                            };
                            id?: string;
                            meta?: {
                                just_redeemed?: boolean;
                                redeemed_by_device_id?: unknown;
                            };
                            relationships?: {
                                category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    postApiFramesByIdRewardsRedeem: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: string | null;
                                emoji_icon?: string;
                                name?: string;
                                origin?: string;
                                point_value?: number;
                                redeemed_at?: string;
                                respawn_on_redemption?: boolean;
                            };
                            id?: string;
                            meta?: {
                                just_redeemed?: boolean;
                                redeemed_by_device_id?: unknown;
                            };
                            relationships?: {
                                category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        };
                        meta?: {
                            reward_points?: {
                                category_id?: number;
                                current_point_balance?: number;
                                lifetime_points_earned?: number;
                            };
                        };
                    };
                };
            };
        };
    };
    postApiFramesByIdRewardsUnredeem: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
                id1: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                description?: unknown;
                                emoji_icon?: string;
                                name?: string;
                                origin?: string;
                                point_value?: number;
                                redeemed_at?: unknown;
                                respawn_on_redemption?: boolean;
                            };
                            id?: string;
                            meta?: {
                                just_redeemed?: boolean;
                                redeemed_by_device_id?: unknown;
                            };
                            relationships?: {
                                category?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        };
                        meta?: {
                            reward_points?: {
                                category_id?: number;
                                current_point_balance?: number;
                                lifetime_points_earned?: number;
                            };
                        };
                    };
                };
            };
        };
    };
    getApiFramesByIdSourceCalendars: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                default_for_new_events?: boolean;
                                editable?: boolean;
                                kind?: string;
                                label?: string;
                                role?: string;
                                source_id?: string;
                            };
                            id?: string;
                            relationships?: {
                                calendar_account?: {
                                    data?: unknown;
                                };
                                source_calendar_categorizations?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                            };
                            type?: string;
                        }[];
                        included?: {
                            attributes?: {
                                category_id?: number;
                                color_hex?: unknown;
                                source_calendar_id?: number;
                                source_color_id?: unknown;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    getApiFramesByIdTaskBoxItems: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                emoji_icon?: string | null;
                                id?: number;
                                reward_points?: number | null;
                                routine?: boolean;
                                summary?: string;
                            };
                            id?: string;
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    getApiFramesByIdTaskNotificationSettings: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            task_due?: {
                                enabled?: boolean;
                            };
                        };
                    };
                };
            };
        };
    };
    getApiFramesCalendar: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                access?: string;
                                activated?: boolean;
                                activated_at?: string;
                                apps?: string[];
                                assistant_household_id?: unknown;
                                blur_effect?: boolean;
                                brightness?: number;
                                current_album_id?: number;
                                currently_sleeping?: boolean;
                                destroyed_at?: unknown;
                                feature_bundle?: {
                                    albums?: {
                                        enabled?: boolean;
                                    };
                                    app_slideshow?: {
                                        enabled?: boolean;
                                    };
                                    bundle_name?: string;
                                    bundle_names?: string[];
                                    captions?: {
                                        enabled?: boolean;
                                    };
                                    chores?: {
                                        enabled?: boolean;
                                    };
                                    countdowns?: {
                                        enabled?: boolean;
                                    };
                                    dinner_plans?: {
                                        enabled?: boolean;
                                    };
                                    disney?: {
                                        enabled?: boolean;
                                    };
                                    doodles?: {
                                        enabled?: boolean;
                                    };
                                    greeting_cards?: {
                                        enabled?: boolean;
                                    };
                                    habit_tracking?: {
                                        enabled?: boolean;
                                    };
                                    lists?: {
                                        enabled?: boolean;
                                    };
                                    magic_import?: {
                                        enabled?: boolean;
                                    };
                                    meal_planning?: {
                                        enabled?: boolean;
                                        unsupported_hardware?: boolean;
                                    };
                                    nudges?: {
                                        enabled?: boolean;
                                    };
                                    photos?: {
                                        enabled?: boolean;
                                    };
                                    recipes?: {
                                        enabled?: boolean;
                                    };
                                    remote_settings?: {
                                        enabled?: boolean;
                                    };
                                    rewards?: {
                                        enabled?: boolean;
                                        unsupported_hardware?: boolean;
                                    };
                                    screensaver?: {
                                        enabled?: boolean;
                                    };
                                    sidekick?: {
                                        enabled?: boolean;
                                    };
                                    timers?: {
                                        enabled?: boolean;
                                    };
                                    videos?: {
                                        enabled?: boolean;
                                    };
                                };
                                gift_recipient_name?: unknown;
                                gift_status?: string;
                                household_name?: unknown;
                                message_viewability?: string;
                                mine?: boolean;
                                name?: string;
                                notification_email?: string;
                                open_to_public?: boolean;
                                plus?: boolean;
                                share_token?: string;
                                show_caption?: boolean;
                                show_heart?: boolean;
                                side_by_side?: boolean;
                                sleep_mode_on?: boolean;
                                sleeps_at?: string;
                                slideshow_speed?: number;
                                slideshow_style?: number;
                                start_sound?: boolean;
                                timezone?: string;
                                trial_expires_at?: unknown;
                                trialing?: boolean;
                                user_created_at?: string;
                                wakes_at?: string;
                            };
                            id?: string;
                            relationships?: {
                                devices?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    }[];
                                };
                                event_notification_setting?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                                user?: {
                                    data?: {
                                        id?: string;
                                        type?: string;
                                    };
                                };
                            };
                            type?: string;
                        }[];
                        included?: {
                            attributes?: {
                                activated?: boolean;
                                blur_effect?: boolean;
                                brightness?: number;
                                category_id?: unknown;
                                current_album_id?: number;
                                currently_sleeping?: boolean;
                                name?: string;
                                nightlight?: boolean;
                                nightlight_brightness?: number;
                                role?: unknown;
                                show_caption?: boolean;
                                show_heart?: boolean;
                                side_by_side?: boolean;
                                sleep_mode?: string;
                                sleep_mode_on?: boolean;
                                sleep_sound?: unknown;
                                sleep_sound_volume?: number;
                                sleeps_at?: string;
                                slideshow_speed?: number;
                                slideshow_style?: number;
                                start_sound?: boolean;
                                timezone?: string;
                                wakes_at?: string;
                            };
                            id?: string;
                            type?: string;
                        }[];
                        meta?: unknown;
                    };
                };
            };
        };
    };
    getApiFramesPhoto: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: unknown[];
                        included?: unknown[];
                        meta?: unknown;
                    };
                };
            };
        };
    };
    getApiFramesTv: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: unknown[];
                        included?: unknown[];
                        meta?: unknown;
                    };
                };
            };
        };
    };
    getApiMessagesCloudUploadCredentials: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            bucket?: string;
                            credentials?: {
                                access_key_id?: string;
                                secret_access_key?: string;
                                session_token?: string;
                            };
                            credentials_expire_at?: string;
                            key_prefix?: string;
                            region?: string;
                        };
                    };
                };
            };
        };
    };
    postApiMessagesUploads: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    caption?: string;
                    ext?: string;
                    file_upload?: {
                        bucket?: string;
                        etag?: string;
                        key?: string;
                    };
                    frame_ids?: string[];
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            message_ids?: number[];
                        };
                    };
                };
            };
        };
    };
    getApiPlusAccess: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            bundle_entitlement?: {
                                available?: boolean;
                            };
                            shares?: unknown[];
                            subscriptions?: {
                                attributes?: {
                                    billing_provider?: string;
                                    created_at?: string;
                                    manageable?: boolean;
                                    plus_type?: string;
                                    purchase_type?: string;
                                    renewal_cadence?: string;
                                    status?: string;
                                };
                                id?: string;
                                type?: string;
                            }[];
                        };
                    };
                };
            };
        };
    };
    postApiPlusPermissionsSharePlus: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    features?: string[];
                    frame_ids?: string[];
                };
            };
        };
        responses: {
            204: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "text/xml": string;
                };
            };
        };
    };
    getApiReminderProfile: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                id?: number;
                                interval_weeks?: number;
                                token?: string;
                            };
                            id?: string;
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    putApiReminderProfile: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
                Priority?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    interval_weeks?: number;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                id?: number;
                                interval_weeks?: number;
                                token?: string;
                            };
                            id?: string;
                            type?: string;
                        };
                    };
                };
            };
        };
    };
    getApiUser: {
        parameters: {
            query?: never;
            header?: {
                "Skylight-Api-Version"?: string;
                Authorization?: string;
                "Sec-GPC"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "cf-cache-status"?: string;
                    "cf-ray"?: string;
                    nel?: string;
                    "skylight-api-version"?: string;
                    "x-content-type-options"?: string;
                    "X-Firefox-Spdy"?: string;
                    "x-permitted-cross-domain-policies"?: string;
                    "x-runtime"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            attributes?: {
                                agreed_to_marketing?: boolean;
                                birthday?: unknown;
                                created_at?: string;
                                dunning_since?: unknown;
                                dunning_since_date?: unknown;
                                email?: string;
                                notification_preference?: unknown;
                                phone?: string;
                                plus_billing_provider?: unknown;
                                profile?: {
                                    birthday?: unknown;
                                    created_at?: string;
                                    id?: number;
                                    name?: string;
                                    owner_id?: number;
                                    owner_type?: string;
                                    updated_at?: string;
                                };
                                subscription_status?: string;
                                trial_days_remaining?: unknown;
                                trial_expires_at?: unknown;
                                was_plus_purchaser?: boolean;
                            };
                            id?: string;
                            type?: string;
                        };
                    };
                };
            };
        };
    };
}

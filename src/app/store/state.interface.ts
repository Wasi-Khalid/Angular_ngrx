
export interface EntityStateInterface<T> {
    loading: boolean;
    upserting: boolean;
    upserted: boolean;
    deleting: boolean;
    deleted: boolean;
    entities: T[];
}
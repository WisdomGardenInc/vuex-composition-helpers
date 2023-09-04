export declare function wrapStore(store: any): {
    createNamespacedHelpers: (namespace?: string | undefined) => {
        useState: (map?: unknown[] | undefined) => import("./util").ComputedRefTypes<unknown>;
        useGetters: (map?: unknown[] | undefined) => import("./util").ExtractGetterTypes<unknown>;
        useMutations: (map?: unknown[] | undefined) => import("./util").ExtractTypes<unknown, Function>;
        useActions: (map?: unknown[] | undefined) => import("./util").ExtractTypes<unknown, Function>;
    };
    useActions: (map?: unknown[] | undefined) => import("./util").ExtractTypes<unknown, Function>;
    useGetters: (map?: unknown[] | undefined) => import("./util").ExtractGetterTypes<unknown>;
    useMutations: (map?: unknown[] | undefined) => import("./util").ExtractTypes<unknown, Function>;
    useState: (map?: unknown[] | undefined) => import("./util").ComputedRefTypes<unknown>;
};

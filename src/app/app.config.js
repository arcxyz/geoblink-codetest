export const appConfig = ($compileProvider) => {
    // disable debug info
    $compileProvider.debugInfoEnabled(false);

    // Disable unused directive types
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
};
appConfig.$inject = ['$compileProvider'];
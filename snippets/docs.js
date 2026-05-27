(function () {
    const originalSetItem = Storage.prototype.setItem;

    Storage.prototype.setItem = function (key, value) {
        originalSetItem.call(this, key, value);

        if (this === window.localStorage) {
            window.dispatchEvent(
                new CustomEvent("localStorageUpdate", {
                    detail: { key, value },
                }),
            );
        }
    };
})();

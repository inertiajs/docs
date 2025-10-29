(function () {
    const originalSetItem = localStorage.setItem;

    localStorage.setItem = function (key, value) {
        const event = new CustomEvent("localStorageUpdate", {
            detail: { key, value },
        });

        window.dispatchEvent(event);

        originalSetItem.call(this, key, value);
    };
})();

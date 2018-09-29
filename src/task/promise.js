/*
const asyncFunction = (object, callback) => {
    setTimeout(() => callback(object));
};

asyncFunction('123', function (result) {
    console.log(result);
});

const promise = new Promise((resolve) => {
    asyncFunction(123, resolve);
});

promise.then((result) => {
    console.log(result);
});

(async () => {
    const result = await promise;

    console.log(result);
})();

$.ajax({
    url: "test.html",
    context: document.body
}).done(function(result1) {
    $( this ).addClass( "done" );

    $.ajax({
        url: "test.html",
        context: result1
    }).done(function(result2) {
        $.ajax({
            url: "test.html",
            context: result2
        }).done(function(result3) {
            console.log(result3);
        });
    });
});

const wrappedAjax = (options) => {
    return new Promise(resolve => {
        $.ajax(options).done(resolve);
    });
};

wrappedAjax({
    url: "test.html",
    context: document.body
}).then((result) => {
    //
});

(async () => {
    const result1 = await wrappedAjax({
        url: "test.html",
        context: document.body
    });

    const result2 = await wrappedAjax({
        url: "test.html",
        context: result1,
    });

    const result3 = await wrappedAjax({
        url: "test.html",
        context: result2,
    });
})();*/

export * from './type';
export * from './model';

function func1(products) {
    const renamedProducts = (products || []).map((product, index) => ({
        ...product,
        name: `${product.name}${index + 1}`,
    }));

    //console.log(renamedProducts);
}

func1([{name: 'name', price: 1}, {name: 'name', price: 1}, {name: 'name', price: 1}]);

const object = {
    doAsync: function (name, onComplete, onError) {
        setTimeout(function () {
            if (name) {
                console.log(name);

                onComplete('done');
            } else {
                onError('some error');
            }
        }, 1);
    }
};

object.doAsync('', function (status) {
    if (status === 'done') {
        //console.log('ok')
    }
}, function (error) {
   // console.error(error);
});

const promise = new Promise(function (resolve, reject) {
    object.doAsync('', resolve, reject);
});

promise
    .then(function (status) {
        if (status === 'done') {
            console.log('ok')
        }

        return promise;
    })
    .catch(function (error)  {
        //console.error(error);
    });

(async function () {
    try {
        const status = await promise;

       // console.log(status);
    } catch (error) {
       // console.error(error);
    }
})();
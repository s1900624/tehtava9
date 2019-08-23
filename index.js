window.onload = function() {
    const obj = {
        coucou: "hello",
        comment: "how",
        va: "are",
        tu: "you",
    };

    const arr1 = [];
    const arr2 = [];

    Object.keys(obj).map(function(key) {
        arr1.push(key);
        arr2.push(obj[key]);
        return true;
    });

    console.log(arr1, arr2);
};
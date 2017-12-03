var testObject = {
    "Test": 1234
}

var testFunction = function () {
    var a = Array(10)
    var dontDoThis = Function("return this").call(420)

    var regex = /^test\w\d[a-z]/

    var test = this.test()
}

let q = () => {
    return 42
}
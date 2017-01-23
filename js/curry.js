/* From http://www.svendtofte.com/code/curried_javascript/ */
//See also: http://www.svendtofte.com/code/practical_functional_js/

/*
function add(a, b) {
    if (arguments.length < 1) {
        return add;
    } else if (arguments.length < 2) {
        return function(c) { return a + c }
    } else {
        return a + b;
    }
}

//Now I can do this:
alert(add(2,2));         // alerts 4
var adds4 = add(4);      // adds4, is now a function, which adds 4, to it's argument.
alert(adds4(5));         // alerts 9.

//Below is a reusable, generic implementation
*/
function curry(func,args,space) {
    var n  = func.length - args.length; //arguments still to come
    var sa = Array.prototype.slice.apply(args); // saved accumulator array
    function accumulator(moreArgs,sa,n) {
        var saPrev = sa.slice(0); // to reset
        var nPrev  = n; // to reset
        for(var i=0;i<moreArgs.length;i++,n--) {
            sa[sa.length] = moreArgs[i];
        }
        if ((n-moreArgs.length)<=0) {
            var res = func.apply(space,sa);
            // reset vars, so curried function can be applied to new params.
            sa = saPrev;
            n  = nPrev;
            return res;
        } else {
            return function (){
                // arguments are params, so closure bussiness is avoided.
                return accumulator(arguments,sa.slice(0),n);
            }
        }
    }
    return accumulator([],sa,n);
}
/*
//Now I can do this:
function add (a,b,c){
      if (arguments.length < this.add.length) {
        return curry(this.add,arguments,this);
      }
      return a+b+c;
}

alert(add()(1,2,4));      // 7
alert(add(1)(2)(5));      // 8
alert(add(1)()(2)()(6));  // 9
alert(add(1,2,7,8));      // 10
*/


//From http://www.crockford.com/javascript/private.html:
/*
Patterns
Public

    function Constructor(...) {

        this.membername = value;

    }
    Constructor.prototype.membername = value;

Private

    function Constructor(...) {

        var self = this;
        var membername = value;

        function membername(...) {...}

    }

    Note: The function statement

        function membername(...) {...}

    is shorthand for

        var membername = function membername(...) {...};

Privileged

    function Constructor(...) {

        this.membername = function (...) {...};

    }
*/
//See also: http://www.litotes.demon.co.uk/js_info/private_static.html


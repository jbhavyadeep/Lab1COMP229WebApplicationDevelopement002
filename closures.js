function parent() {
    const message = 'Hello How are you';
    function child() {
    alert (message);
    }
    child();
    }
    parent();

    function parent1() {
        const message = 'Good Morning';
        function child() {
        alert (message);
        }
        return child;
        }
        const childFN = parent1();
        childFN();
            
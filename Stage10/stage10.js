function handleClick(e) {
    $("#balloon").animate({
        left: [e.clientX, "easeOutBounce"],
        top: e.clientY,
    });
}

function init() {
    console.log('[init]')

    $(document).on('click', handleClick);
}
// init
init()
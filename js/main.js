
$(document).on("click", '[data-type="bag"]', function () {
    $("#bagModalContent").load(
        "modals/bag-details.html .details-content",
        () => $("#bagModal").fadeIn()
    );
});

$(document).on("click", '[data-type="shoe"]', function () {
    $("#shoeModalContent").load(
        "modals/shoe-details.html .details-content",
        () => $("#shoeModal").fadeIn()
    );
});

$(".close-modal").click(() => $(".modal-box").fadeOut());

function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email);
}

$("#loginForm").submit(function (e) {
    e.preventDefault();

    if (!validEmail($(this).find('input[type="email"]').val()))
        return toastr.error("Please enter a valid email.");

    toastr.success("Login successful!");
});

$("#registerForm").submit(function (e) {
    e.preventDefault();

    if (!validEmail($(this).find('input[type="email"]').val()))
        return toastr.error("Please enter a valid email.");

    if ($("#password").val() !== $("#confirmPassword").val())
        return toastr.error("Passwords do not match.");

    toastr.success("Account created successfully!");
});
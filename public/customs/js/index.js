$(document).ready(function() {
    $("body")
        .on("click", ".increment-button", function(){
            const increment_button = $(this);
            const quantity_input = increment_button.siblings(".quantity");
            const quantity = parseInt(quantity_input.val()) || 0;

            quantity_input.val(quantity + 1);
        })
        .on("click", ".decrement-button", function(){
            const decrement_button = $(this);
            const quantity_input = decrement_button.siblings(".quantity");
            const quantity = parseInt(quantity_input.val()) || 0;

            if(quantity > 1){
                quantity_input.val(quantity - 1);
            }
        })
        .on("submit", ".checkout_form", function(){
            const checkout_form = $(this);
            const quantity_input = checkout_form.find(".quantity");
            const quantity = parseInt(quantity_input.val());

            if(quantity > 0){
                $.post(checkout_form.attr("action"), checkout_form.serialize(), function(data){
                    if(data.status){
                        quantity_input.val(1);
                        alert("Product was added to cart successfully!");
                    }
                });
            }

            return false;
        })
        $(".product_image").on("click", function(){
            const product_image = $(this);
            console.log("IMAGE SHOW");
            $("#show-image-modal").find("img").attr("src", product_image.attr("src"));
        });
});
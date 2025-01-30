$(document).ready(function() {
    $("body")
        .on("click", ".increment-button", function(){
            const increment_button = $(this);
            const quantity_input = increment_button.siblings(".quantity");
            const quantity = parseInt(quantity_input.val()) || 0;

            quantity_input.val(quantity + 1);

            increment_button.closest(".update_quantity_form").submit();
        })
        .on("click", ".decrement-button", function(){
            const decrement_button = $(this);
            const quantity_input = decrement_button.siblings(".quantity");
            const quantity = parseInt(quantity_input.val()) || 0;

            if(quantity > 1){
                quantity_input.val(quantity - 1);
                decrement_button.closest(".update_quantity_form").submit();
            }
        })
        .on("submit", ".update_quantity_form, .delete_cart_product_form", function(){
            const update_quantity_form = $(this);

            $.post(update_quantity_form.attr("action"), update_quantity_form.serialize(), function(data){
                window.location.reload();
            });

            return false;
        })
});
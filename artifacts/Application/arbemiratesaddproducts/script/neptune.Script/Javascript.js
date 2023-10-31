function upload() {
    const picture = Text.getText();

    let final_data = {};

    final_data.image = picture;
    final_data.productName = InputName.getValue();
    final_data.price = InputPrice.getValue();
    final_data.quantity = InputQuantity.getValue();

    console.log(final_data);

    var options = { data: final_data };
    apiPUT(options);
}

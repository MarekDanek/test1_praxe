
 $.ajax({
    url: "https://projectpraxe.hasura.app/v1/graphql",
    headers: {
    "Content-Type": "application/json",
    "Hasura-Client-Name": "hasura-console",
    "x-hasura-admin-secret": "T6wpZtqF9sVk41BQRkVyaw1AB1L2c4l01bqF752qB2w0QQWnSKLy2di75UjU86fQ"
    },
    type: "POST",
    data: JSON.stringify({query: "query {Proteiny {id, id_protein, Cena, Mnozstvi, Prichut, Prodejce, ZemeVyroby}}"}),
    success: function(data) {
    console.log(data);
    if (data.errors != null) {
    console.log(data.errors[0].message);
    }
    console.log("POSLÁNY");
    }
    })

   
  
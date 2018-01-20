App = {
  web3Provider: null,
  contracts: {},

  init: function() {
      
    return App.initWeb3();
  },

  initWeb3: function() {
    

    return App.initContract();
  },

  initContract: function() {
      
   $.getJSON('Base.json', function(data) {
  // Get the necessary contract artifact file and instantiate it with truffle-contract
  var MarketArtifact = data;
  App.contracts.Base = TruffleContract(BaseArtifact);

  // Set the provider for our contract
  App.contracts.Base.setProvider(App.web3Provider);
  console.log(App.contracts.Base);
  // Use our contract to retrieve and mark the adopted pets
       alert("hi");
  return;
});

    return App.bindEvents();
  },

  bindEvents: function() {
    //$(document).on('click', '.btn-adopt', App.handleAdopt);
      
  },

  markAdopted: function(adopters, account) {
   
      var adoptionInstance;

      App.contracts.Adoption.deployed().then(function(instance) {
        adoptionInstance = instance;

        return adoptionInstance.getAdopters.call();
          
      }).then(function(adopters) {
        for (i = 0; i < adopters.length; i++) {
            if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
                $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
            }
        }
      }).catch(function(err) {
        console.log(err.message);
      });
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    var adoptionInstance;

web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

  var account = accounts[0];

  App.contracts.Adoption.deployed().then(function(instance) {
    adoptionInstance = instance;

    // Execute adopt as a transaction by sending account
    return adoptionInstance.adopt(petId, {from: account});
      
  }).then(function(result) {
    return App.markAdopted();
  }).catch(function(err) {
    console.log(err.message);
  });
});
  }

};

$(function() {
  $(window).load(function() {
    App.init();
    alert("hi");
  });
});
Router.configure({
    layoutTemplate: 'defaultLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/home', function () {
  this.render('home');
});

Router.route('/community',{	
	loadingTemplage: 'loading',
	waitOn: function () {loadProposals();},
	action: function(){ this.render('community'); },
	data : function () {return ProposalsDB.find().fetch();}
});

Router.route('/buy',{ 
	loadingTemplage: 'loading',
	waitOn: function () {loadAllListings();},
	action: function(){ this.render('buy'); },
	data : function () {return ListingsDB.find({enabled : true}).fetch();}
});



Router.route('/sell', { 
	loadingTemplage: 'loading',
	waitOn: function () {loadAllListings(); loadSellerOrders();},
    action: function(){ this.render('sell'); },
    data : function () {return OrdersDB.find().fetch();}
});

Router.route('/purchases', { 
 	loadingTemplage: 'loading',
  	waitOn: function () {loadBuyerOrders();},
  	action: function() { this.render('purchases'); },
  	data : function () {return OrdersDB.find().fetch();}
});

Router.route('/faq', function () {
  this.render('faq');
});

Router.route('/createListing', function () {
  this.render('createListing');
});

Router.route('/listing', {
loadingTemplate :'loading',
waitOn: function() {feedbackScraper(Number(this.params.query.id));},
action: function() { this.render('listing');},
data : function () {
  		var id = this.params.query.id;
  		return ListingsDB.findOne({listingID : Number(id)});}
});
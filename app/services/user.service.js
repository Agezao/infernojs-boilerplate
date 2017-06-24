let users = [
		{
			id: 1,
			name: "Gabriel Age",
			age: "21",
			location: "São Paulo, Brazil"
		},
		{
			id: 2,
			name: "Benoit Mandelbrot",
			age: "55",
			location: "Warsaw, Poland"
		},
		{
			id: 3,
			name: "Seiji Ogawa",
			age: "83",
			location: "Tokyo, Japan"
		},
		{
			id: 4,
			name: "Dennis Ritchie",
			age: "70",
			location: "New York, United States"
		},
		{
			id: 5,
			name: "Marvin Minsky",
			age: "88",
			location: "New York, United States"
		}
	];

class UserService {
	constructor() {}

	List() {
		return users;
	}

	Create(model) {
		users.push(model);
	}

	Update(model) {
		this.Delete(model.id);
		this.Create(model);
	}

	Get(id) {
		for(var i in users)
			if(users[i]['id'] == id)
				return users[i];
	}

	Delete(id) {
		users = users.filter(function(el) {
				return el.id !== id;
			});
	}

	Find(name) {
		for(var i in users)
			if(users[i]['name'].toLowerCase().indexOf(name.toLowerCase()) > -1)
				return users[i];
	}
}

export default UserService;
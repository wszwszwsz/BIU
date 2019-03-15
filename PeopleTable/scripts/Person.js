
function Person(json){
    var self = this;
    self.name  = json.firstName;
    self.surname = json.lastName;
    self.Id = json.id;
    self.Gender = json.gender;
    self.Email = json.email;
    self.Age = json.age;
    self.Birthsday = json.birthsday;
    
    
    self.toTableRow = function(){
        return '<tr><td>'
             +self.Id
            +'</td><td>'
            +self.name
            +'</td><td>'
            +self.surname
            +'</td><td>'
           
            +self.Gender
            +'</td><td>'
            +self.Email
            +'</td><td>'
            +self.Age
            +'</td></tr>'
            
          
    }
    
    self.fullName = function(){
        return sum(self.name, self.surname);
    }
    
    var sum = function(a,b){
        return a+ " " +b;
    }
    
}

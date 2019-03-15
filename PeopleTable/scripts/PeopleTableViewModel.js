function PeopleTableViewModel(config){
    var self = this;
    self.people = new ListOfPeople();
    self.currentPage = 0;
    self.pageSize = config.pageSize;
    self.context = config.context;

        self.next = function(){
            self.people.clear();
            var begin = (self.currentPage)*self.pageSize;
            var end = (self.currentPage + 1)*self.pageSize;
            getData(begin,end);
            self.currentPage++;
            self.context.innerHTML=self.people.toTable();
        }

        self.prev = function(){
            self.people.clear();
            if(self.currentPage - 1>=0){
                self.currentPage--;
            }
            var begin = (self.currentPage) * self.pageSize;
            var end = (self.currentPage + 1) * self.pageSize;
            getData(begin,end);
            self.context.innerHTML=self.people.toTable();
        }
};
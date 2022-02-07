package studentstruct

type Student struct {
	IndexNumber string `json:"indexnumber"`
	Name        string `json:"name"`
	Age       	int    `json:"age"`
	Email 		string `json:"email"`
}
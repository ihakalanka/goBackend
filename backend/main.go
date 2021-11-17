package main

import (
	"encoding/json"
	
	"net/http"

	"github.com/gorilla/mux"
)
type Student struct{
	ID string `json:"id"`
	Name string `json:"name"`
	Age int `json:"age"`
	E_mail string `json:"e_mail"` 
}

var student []Student

func main() {
student=append(student, Student{ID: "194005K",Name: "Akalanaka",Age: 23,E_mail: "Akalanaka@gmail.com"})
	r :=mux.NewRouter()
	
	 http.ListenAndServe(":8080",r)
   
}

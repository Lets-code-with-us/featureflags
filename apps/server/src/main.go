package main

import (
	"fmt"
	"net/http"
)

func main() {

	router := http.NewServeMux()

	// sample Hello API Handler

	router.HandleFunc("GET /", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Welcome to feature backend"))
	})

	// serve the server
	serve := http.Server{
		Addr:    "8000",
		Handler: router,
	}
	

	err := serve.ListenAndServe()

	if err != nil{
		fmt.Println(err)
	}

}

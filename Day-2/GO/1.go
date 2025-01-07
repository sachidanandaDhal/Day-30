// 1 .Variables:

// 1 name and age are explicitly declared with types (string and int, respectively).
// 2 country and isStudent use short declaration (:=), and Go infers their types from the assigned values.

// 2. Constants:

// 1 pi and maxCount are constants declared using the const keyword.
// 2 pi has an untyped constant value, and Go automatically infers its type based on its usage.

// 3 .iota:

// 1 Red, Green, and Blue are constants generated using iota, which increments automatically for each new constant.

package main

import "fmt"

func main() {
	var name string = "sachidananda Dhal"
	var age int = 25
	fmt.Println("Name: ", name)
	fmt.Println("Age: ", age)

	// Using type inference with short declaration

	country := "India"
	isStudent := true
	fmt.Println("Country: ", country)
	fmt.Println("Is Student: ", isStudent)

	// Declaring constants

	const pi = 3.44
	const maxcount = 100
	fmt.Println("pi: ", pi)
	fmt.Println("Max count: ", maxcount)

	// Using iota for constant generation

	const (
		Green = iota
		Blue
		Red
	)
	fmt.Println("Red:", Red)     // Output: 0
	fmt.Println("Green:", Green) // Output: 1
	fmt.Println("Blue:", Blue)   // Output: 2

	DescribeDataTypes()

}

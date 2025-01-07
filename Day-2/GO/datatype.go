package main

import "fmt"

func DescribeDataTypes() {
    // Integer types
    var age int = 25
    var smallNumber int8 = 127

    // Floating-point types
    var height float64 = 5.9

    // Boolean type
    var isStudent bool = false

    // String type
    var name string = "Sachidananda"

    // Complex number
    var c complex128 = 1 + 2i

    // Byte and Rune
    var char byte = 'A'
    var unicodeChar rune = '你'

    // Print the values
    fmt.Println("Age:", age)
    fmt.Println("Small Number:", smallNumber)
    fmt.Println("Height:", height)
    fmt.Println("Is Student:", isStudent)
    fmt.Println("Name:", name)
    fmt.Println("Complex Number:", c)
    fmt.Println("Byte Character:", char)
    fmt.Println("Unicode Character:", unicodeChar)
}

package main
import ("fmt"
		"time"
)

// func main() {
//   fmt.Println("Hello World!")
// }

// a =: 10 // cant do this since declaration is outside function (only vars can do this)

var a int 
var b int = 2
var c = 3 // value changes later 	
var test int

const PI = 3.14 // type is inferred 
const PI_2 int = 3

func myFunc () {
	fmt.Println("My Function")
}

func count (animal string, c chan string) {
	for i:=1; i<=2; i++ {
		fmt.Println(animal)
		c <- animal
		time.Sleep(time.Millisecond * 500)
	}
	close(c)
}


func familyName(firstname string, age int) {
	fmt.Println("Hello", age, "year old", firstname)
  }
  

// func main() {
// 	var student1 string = "John" //type is string
// 	var student2 = "Jane" //type is inferred
// 	student3 := 2 //type is inferred

// 	fmt.Println(student1)
// 	fmt.Println(student2)
// 	fmt.Println(student3)

// 	var student4 string // default value initialised ""
// 	student4 = "Dan" // assigned value "" => John
// 	fmt.Println(student4)

// 	a := 5
// 	fmt.Println(a)

// 	var d, e = 6, "Hello"
// 	c, f := 7, "World!"
// 	fmt.Println(d)
// 	fmt.Println(e)
// 	fmt.Println(c)
// 	fmt.Println(f)

// 	fmt.Println(PI)
// 	fmt.Println(PI_2)

// 	var arr1 = [...]int{1,2,3} // inferred 
// 	var arr2 = [3]string{"fred", "nancy", "sally"} // 

// 	fmt.Println(arr1)
// 	fmt.Println(arr2)
// 	fmt.Println(arr1[2])

// 	arr1[1] = 1
// 	fmt.Println(arr1)
// 	fmt.Println(len(arr1)) // 6

// 	arr3 := []int{10, 11, 12, 13, 14,15, 16, 17}
// 	myslice := arr3[2:6]
  
// 	fmt.Println(len(myslice)) 
// 	fmt.Println(cap(myslice))
// 	fmt.Println("Hello")


// 	day := "Monday"

// 	switch day {
// 	case "Monday":
// 	  fmt.Println("Monday")
// 	case "Tuesday":
// 	  fmt.Println("Tuesday")
// 	default:
// 		fmt.Println("Sunday")
// 	}

// 	dayInt := 5

// 	switch dayInt {
// 	case 1,3,5:
// 	 fmt.Println("Odd weekday")
// 	case 2,4:
// 	  fmt.Println("Even weekday")
// 	case 6,7:
// 	 fmt.Println("Weekend")
//    default:
// 	 fmt.Println("Invalid day of day number")
//    }

//    for i:=0; i <10; i++ {
// 	fmt.Println(i)
// 	if i == 5 {
// 		break
// 	}
//    }


//    myFunc() // invoking function
//    familyName("Rishi", 24) // invoking function

//    arr7 := [...]int{1}
//    fmt.Println(len(arr7) - 1)

//    name := "Rishi"
//    fmt.Println(name)

//   }

  func main () {
	c := make(chan string)

	go count("Sheep", c)
	//go count("Goats", c)

	for animal := range c {
		fmt.Println(animal)
	}

	test := 5
	fmt.Printf("%T\n", test)

	newTest := 10 
	fmt.Println("Hello:",newTest)


	
	// go count("Goats")
	// time.Sleep(time.Second * 10)

  }



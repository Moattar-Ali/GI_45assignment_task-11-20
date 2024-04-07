//Question-11

let names = ["Maliha", "Kehkashan", "Kinza", "Iqra"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//Question-12

let message = "Are you ready for Tomorrow?";
console.log(names[0] +" " + message);
console.log(names[1] +" " + message);
console.log(names[2] +" " + message);
console.log(names[3] +" " + message);

//Question-13

let transport = ["Honda" , "Mercedes", "Audi"];
transport.map((items) => console.log(`I would like to own my ${items}`));

//Question-14

let guestsAre = ["Ayesha","Misbah","Tayyaba", "Warisha"];
guestsAre.map((items) => console.log(`Dear ${items}, You are invited to a dinner`));

//Question-15

let invited_guests = ["Maryam", "Noureen", "Aiman", "Sana"];
let guestCannotCome = 'Maryam';

console.log(guestCannotCome + " is unable to come for a dinner");

let newInvitedGuest = "Areesha";
invited_guests [invited_guests.indexOf(guestCannotCome)] = newInvitedGuest;

console.log(invited_guests);

invited_guests.map((item) => console.log(`Dear ${item}! You are invited to a dinner`));

//Question-16

let guests_array = ["Rumaisa", "Bareerah", "Linta", "Yumna"];
let cannotAttend = "Linta";
let newAttendingGuest = "Huma";

guests_array [guests_array.indexOf(cannotAttend)] = newAttendingGuest;
console.log(guests_array);

guests_array.map((items) => console.log(`Dear ${items}! I have found a bigger dinner table. So, I'm inviting more people.`) );

//for the position of an element at the start

let guest_at_beginning = "Hamna";
guests_array.unshift(guest_at_beginning);
console.log(guests_array);

//for the position of an element at the middle of an array

let guest_at_middle = "Laiba";
let mid_index = guest_at_middle.length/2
guests_array.splice(mid_index,0,guest_at_middle);

console.log(guests_array);

//for the position of an element at the end

guests_array.push("Haniya");
console.log(guests_array);

//Question-17

let guests = ["Vaneeza","Aleesha","Adina","Hafsa","Dua"];

//to inform that only two people can be invited
console.log("Only two people can be invited due to limited space..")

//removing rest of the people
while (guests.length >2){
    const toRemoveGuest = guests.pop();
    console.log(`Sorry ${toRemoveGuest}, You are no longer invited to dinner.`);
}
// to print the remaining list
guests.forEach((person) => console.log(`Dear ${person}! "You are invited for a dinner."`));

//Question-18

//arrays of the elements
let placesToVisit = ["Pakistan", "China", "Iran", "Japan","Dubai"];

//to print in the original order
console.log("Original order: ", placesToVisit);

//to print in alphabetical order
console.log("Alphabetical order: ", [...placesToVisit].sort());

//checking whether array after sorting is still in it's original order or not
console.log("Arrays after sorting: ", placesToVisit);

//to print in reverse alphabetical order
console.log("Reverse alphabetical order: ", [...placesToVisit].sort().reverse());

//checking for the original order after reverse sorting
console.log("Arrays after reverse sorting: ", placesToVisit);

//to reverse the order of the array
console.log("Reversed Arrays: ",[...placesToVisit].reverse());

//again for the original order
console.log("Back to original order: ", placesToVisit);

//to sort the array in alphabetical order
 console.log("Sorted array in alphabetical order: ", [...placesToVisit].sort());

 //to sort the array in reverse alphabetical order
placesToVisit.sort((a,b) => b.localeCompare(a));
console.log("Sorted Array in reversed alphabetical order: ", placesToVisit);

//Question-19

let invitators = ["Vaneeza", "Aleesha"];
let lengthOfInvitators = invitators.length;

console.log(`${lengthOfInvitators} persons will come for a dinner.`);

//Question-20

let nameOfFlowers = ["Rose","Jasmine","Marigold","Lily","Sunflower"];
console.log('List Of Flowers:');
console.log(nameOfFlowers);






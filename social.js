var _ = require('underscore');

var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function followers(personID) {
  var arrayOfFollowers = [];
  var person = data[personID]['name'];
  for (var people in data) {
    var arrayOfFollowing = following(people);
    for (var i = 0; i < arrayOfFollowing.length; i++) {
      if (arrayOfFollowing[i] == person) {
        arrayOfFollowers.push(data[people]['name']);
      }
    }
  }
    return arrayOfFollowers
  };

function followersOver30(personID) {
  var peopleOver30 = [];
  var person = data[personID]['name'];
  for (var people in data) {
    var arrayOfFollowing = following(people);
    for (var i = 0; i < arrayOfFollowing.length; i++) {
      if (arrayOfFollowing[i] == person && data[people]['age'] > 30) {
        peopleOver30.push(data[people]['name']);
      }
    }
  }
  return peopleOver30;
}

function following(personID) {
  var arrayOfFollowing = [];
  var followingIDsArray = data[personID]['follows'];
  for (var i = 0; i < followingIDsArray.length; i ++) {
    arrayOfFollowing.push(data[followingIDsArray[i]]['name']);
  }
  return arrayOfFollowing;
};



function followingOver30(personID) {
  var arrayOfFollowing = [];
  var followingIDsArray = data[personID]['follows'];
  for (var i = 0; i < followingIDsArray.length; i ++) {
    if (data[followingIDsArray[i]]['age'] > 30) {
      arrayOfFollowing.push(data[followingIDsArray[i]]['name']);
    }
  }
  return arrayOfFollowing;
}

function listNameInfo() {
  for (var people in data) {
    console.log(`${data[people]['name']} \n
                Follows: ${following(people)} \n
                Followers: ${followers(people)}`)
  }
};

function followsMost() {
  var followingMost = [];
  var followingMostNum = 0;
  for (var people in data) {
    if (following(people).length > followingMostNum) {
      followingMostNum = following(people).length;
    }
  }
  for (var people in data) {
    if (following(people).length == followingMostNum) {
      followingMost.push(data[people]['name']);
    }
  }
  return followingMost.join("");
}

function mostFollowers() {
  var mostFollowed = [];
  var largestFollowers = followers('f01').length;
  for (var people in data) {
    if (followers(people).length > largestFollowers) {
      largestFollowers = followers(people).length;
    }
  }
  for (var people in data) {
    if (followers(people).length == largestFollowers) {
      mostFollowed.push(data[people]['name']);
    }
  }
  return mostFollowed.join(", ")
}

function mostFollowersOver30() {
  var mostFollowed = [];
  var largestFollowers = followers('f01').length;
  for (var people in data) {
    if (followersOver30(people).length > largestFollowers) {
      largestFollowers = followers(people).length;
    }
  }
  for (var people in data) {
    if (followersOver30(people).length == largestFollowers) {
      mostFollowed.push(data[people]['name']);
    }
  }
  return mostFollowed.join(", ")
};

function followingMostOver30() {
  var followingMost = [];
  var followingMostNum = 0;
  for (var people in data) {
    if (followingOver30(people).length > followingMostNum) {
      followingMostNum = followingOver30(people).length;
    }
  }
  for (var people in data) {
    if (followingOver30(people).length == followingMostNum) {
      followingMost.push(data[people]['name']);
    }
  }
  return followingMost.join(", ");
}

function unrequitedLove() {
  var notFollowedBack = [];
  for (var people in data) {
    var followsArray = data[people]['follows'];
    for (var i = 0; i < followsArray.length; i++){
      if (!data[followsArray[i]]['follows'].includes(people)) {
        if (!notFollowedBack.includes(data[people]['name'])) {
          notFollowedBack.push(data[people]['name']);
        }
      }
    }
  }
    return notFollowedBack.join(", ");
}

function sumOfFollowers(personID) {
  var sum = followers(personID).length;
  var list = followers(personID);
  for (var people in data) {
    for (var i = 0; i < list.length; i++ ) {
      if (list[i] == data[people]['name']) {
        sum += followers(people).length;
      }
    }
  }
  return sum;
}

console.log(sumOfFollowers('f06'));


























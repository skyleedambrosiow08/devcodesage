// Create a class named DevCodeSage
class DevCodeSage {
    constructor() {
        this.skills = [];
    }

    // Method: acquire a new skill
    acquireSkill(skill) {
        this.skills.push(skill);
        console.log(`Acquired ${skill} as a new skill.`);
    }

    // Method: share wisdom with other developers
    shareWisdom() {
        console.log("Sharing wisdom: Always strive for simplicity and clarity in your code.");
    }

    // Method: list all acquired skills
    listSkills() {
        console.log("Acquired skills:");
        this.skills.forEach(skill => {
            console.log(skill);
        });
    }
}

// Create an instance of DevCodeSage named myDevCodeSage
const myDevCodeSage = new DevCodeSage();

// Acquire skills
myDevCodeSage.acquireSkill("JavaScript");
myDevCodeSage.acquireSkill("Python");
myDevCodeSage.acquireSkill("Java");

// List all acquired skills
myDevCodeSage.listSkills();

// Share wisdom
myDevCodeSage.shareWisdom();

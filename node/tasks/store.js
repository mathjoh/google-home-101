const defaultInventory = {
    vanilla: {
        displayName: 'vanilla',
        cones: 400
    },
    chocolate: {
        displayName: 'chocolate',
        cones: 200
    },
    strawberry: {
        displayName: 'strawberry',
        cones: 100
    },
    mint: {
        displayName: 'mint',
        cones: 0
    },
};

const remainingFlavours = inventory => Object.values(inventory).filter(item => item.cones !== 0).map(item => item.displayName);

const emptyFlavours = inventory => Object.values(inventory).filter(item => item.cones === 0).map(item => item.displayName);

const numberOfCones = (flavour, inventory) => inventory[flavour].cones;

const order = (flavour, cones, inventory) => {
    if (inventory[flavour] && inventory[flavour].cones >= cones) {
        inventory[flavour].cones = inventory[flavour].cones - cones;
        return true;
    }
    return false;
};

const store = () => {
    let inventory = defaultInventory;

    return {
        inventory,
        remainingFlavours: () => remainingFlavours(inventory),
        emptyFlavours: () => emptyFlavours(inventory),
        numberOfCones: flavour => numberOfCones(flavour, inventory),
        order: (flavour, cones) => order(flavour, cones, inventory),
    }
};

module.exports = store;

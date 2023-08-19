function setWaitTime (e) {
    if (e.action == "ridecreate") {
        if ((e.args.rideObject < 0xFFFF) && ((e.args.flags & 0x80000000) != 0)) {
            context.executeAction("ridesetsetting", {ride: e.result.ride, setting: 2, value: 5});
            context.executeAction("ridesetsetting", {ride: e.result.ride, setting: 3, value: 20});
            var newName = "";
            switch (e.args.rideType) {
                // Roller Coasters
                case 0: // Spiral Roller Coaster
                    newName = "Percolator";
                    break;
                case 1: // Stand Up/Stand Up Steel Roller Coaster
                    newName = "Blue Bomber";
                    break;
                case 2: // Suspended/Suspended Swinging Coaster
                    newName = "Phoenix";
                    break;
                case 3: // Inverted Roller Coaster
                    newName = "Danglefeet";
                    break;
                case 4: // Junior Roller Coaster
                case 95: // Steel Mini/Classic Mini Roller Coaster
                    newName = "Ladybird";
                    break;
                case 7: // Mini Suspended Coaster
                    newName = "Batflyer";
                    break;
                case 9: // Wooden Wild Mouse Roller Coaster
                    newName = "Crazy Vole";
                    break;
                case 10: // Steeplechase/Classic Single Rail Roller Coaster
                    newName = "Steeplechase";
                    break;
                case 13: // Bobsled/Bobsleigh Roller Coaster
                    newName = "Jamaican Slider";
                    break;
                case 15: // Looping/Steel Roller Coaster
                    newName = "Fizzly";
                    break;
                case 17: // Mine Train Roller Coaster
                case 88: // Mine Ride
                    newName = "Manic Miner";
                    break;
                case 19: // Corkscrew/Steel Corkscrew Roller Coaster
                    newName = "Corkscrew";
                    break;
                case 42: // Reverse Freefall/Reverse Whoa Belly Coaster
                    newName = "!ylleB aohW";
                    break;
                case 44: // Vertical/Vertical Drop Roller Coaster
                    newName = "Mega Drop";
                    break;
                case 51: // Twister/Steel Twister Roller Coaster
                    newName = "Silvertwist";
                    break;
                case 52: // Wooden Roller Coaster
                case 99: // Classic Wooden Roller Coaster
                    newName = "Woodchip";
                    break;
                case 53: // Side Friction/Wooden Side Friction Roller Coaster
                    newName = "Ol' Creaky";
                    break;
                case 54: // Steel Wild Mouse Roller Coaster
                case 94: // Spinning Wild Mouse Roller Coaster
                    newName = "Wild Mouse";
                    break;
                case 55: // Multi Dimensional Roller Coaster
                case 56:
                    newName = "Back to the Future";
                    break;
                case 57: // Flying Roller Coaster
                case 58:
                    newName = "Tickletoes";
                    break;
                case 59: // Virginia Reel
                    newName = "Virginia Reel";
                    break;
                case 62: // Lay Down/Classic Flying Roller Coaster
                case 64:
                    newName = "Knight Flight";
                    break;
                case 65: // Reverser/Wooden Reverser Roller Coaster
                    newName = "Reversinator";
                    break;
                case 66: // Heatline Twister Roller Coaster
                    newName = "Heartline Twist";
                    break;
                case 68: // Giga Coaster
                case 91: // Hyper Coaster
                    newName = "Millennium Force";
                    break;
                case 73: // Compact Inverted/Suspended Looping Coaster
                    newName = "Grapevine";
                    break;
                case 75: // Air Powered Vertical Coaster
                    newName = "Top Thrill Dragster";
                    break;
                case 76: // Inverted Hairpin/Inverted Wild Mouse Coaster
                    newName = "Rat Race";
                    break;
                case 86: // Inverted Impulse Coaster
                    newName = "Boomerang";
                    break;
                case 87: // Mini Roller Coaster
                    newName = "Red Rocket";
                    break;
                case 90: // LIM Launched Roller Coaster
                    newName = "Quantum Leap";
                    break;
                case 92: // Hyper Twister Coaster
                    newName = "Cerberus";
                    break;
                case 96: // Hybrid Coaster (OpenRCT2)
                    newName = "Manticore";
                    break;
                case 97: // Single Rail Roller Coaster (OpenRCT2)
                    newName = "Mobius";
                    break;
                case 98: // Alpine Roller Coaster (OpenRCT2)
                    newName = "Matterhorn";
                    break;
                
                // Transport Rides
                case 5: // Miniature Railway
                    newName = "Starlight Express";
                    break;
                case 6: // Monorail
                case 63: // Suspended Monorail
                    newName = "Monorail";
                    break;
                case 18: // Chairlift
                    newName = "Sky Flyer";
                    break;
                case 43: // Lift/Elevator
                    newName = "Going Up";
                    break;
                
                // Water Rides
                case 8: // Boat Hire
                    newName = "Lazy River";
                    break;
                case 16: // Water/Dinghy Slide
                    newName = "Demon Drop";
                    break;
                case 23: // Log Flume
                    newName = "Logger's Revenge";
                    break;
                case 24: // River Rapids
                    newName = "Ropey Rapids";
                    break;
                case 60: // Splash Boats/River Ride
                    newName = "Super Splash";
                    break;
                case 74: // Water Coaster 
                    newName = "Splash Mountain";
                    break;
                case 78: // Submarine Ride
                    newName = "Red October";
                    break;
                case 79: // River Rafts/Raft Ride
                    newName = "Styx";
                    break;
                
                // Gentle Rides
                case 11: // Car Ride
                    newName = "Mini Racers";
                    break;
                case 14: // Observation Tower
                    newName = "Tower to the Clouds";
                    break;
                case 20: // Maze/Hedgemaze
                    newName = "Chainsaw Hedgemaze Meyhem";
                    break;
                case 21: // Spiral Slide
                    newName = "Slide to Heck";
                    break;
                case 25: // Bumper Cars/Dodgems
                    newName = "Beat 'Em Ups";
                    break;
                case 33: // Merry Go Round
                    newName = "Olde Tyme Carousel";
                    break;
                case 37: // Ferris Wheel
                    newName = "Cyclone";
                    break;
                case 41: // Space Rings
                    newName = "Alien Spheres";
                    break;
                case 47: // Haunted House
                    newName = "House of Terror";
                    break;
                case 49: // Circus/Circus Show
                    newName = "Circus Circus";
                    break;
                case 50: // Ghost Train
                    newName = "Mr. Toad's Wild Ride";
                    break;
                case 61: // Mini Helicopters/Cycle Monorail
                    newName = "Mini Copters";
                    break;
                case 67: // Mini Golf
                    newName = "Green Greens";
                    break;
                case 70: // Flying Saucers
                    newName = "Alien Invasion";
                    break;
                case 71: // Crooked House
                    newName = "Looney Bin";
                    break;
                case 72: // Cycle Railway/Monorail Cycles
                    newName = "Bicycle Race";
                    break;
                case 93: // Monster Trucks
                    newName = "Tough Mudder";
                    break;
                
                // Thrill Rides
                case 12: // Launched Freefall/Whoa Belly
                    newName = "Whoa Belly!";
                    break;
                case 22: // Go Karts
                    newName = "Mega Racers";
                    break;
                case 26: // Swinging Ship/Pirate Ship
                    newName = "Ghost Ship";
                    break;
                case 27: // Swinging Inverter Ship
                    newName = "Revenge of the Ghost Ship";
                    break;
                // case 38: // Motion Simulator
                // case 39: // 3D Cinema
                case 40: // Top Spin/Gravitron
                    newName = "Gravitron";
                    break;
                case 46: // Twist/Scrambled Eggs
                    newName = "Egg Scrambler";
                    break;
                case 69: // Roto Drop
                    newName = "Roto Drop";
                    break;
                case 77: // Magic Carpet
                    newName = "A Whole New World";
                    break;
                case 81: // Enterprise
                    newName = "Enterprise";
                    break;
                
                default:
                    break;
            }
            context.executeAction("ridesetname", {ride: e.result.ride, name: newName});
        }
    }
}

function main() {
    context.subscribe("action.execute", setWaitTime);
}

registerPlugin({
    name: 'Wait Time',
    version: '2.0',
    authors: ['Josh Bodner'],
    type: 'remote',
    licence: 'MIT',
    targetApiVersion: 34,
    main: main
});

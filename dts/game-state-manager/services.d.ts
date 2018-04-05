import { Identifier } from "microinject";
import { Parseable } from "../interfaces";
import { GameObject } from "./interfaces";
/**
 * This is anagolous to the ONI assembly's ```SaveManager``.
 * However, we name it for what it does, because we already
 * have enough things called "save".
 * Everything else called "save" deals with the save file
 * structure, while this explicitly deals with instantiating
 * game objects.
 */
export interface OniGameStateManager extends Parseable {
    readonly gameObjects: ReadonlyMap<string, GameObject[]>;
}
export declare const OniGameStateManager: Identifier<OniGameStateManager>;

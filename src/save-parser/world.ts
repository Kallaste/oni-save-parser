import { TemplateParser } from "./templates/type-parser";
import { readKleiString, ParseIterator } from "../parser";
import { SaveGameWorld } from "../save-structure/world";
import { validateDotNetIdentifierName } from "../utils";

const AssemblyTypeName = "Klei.SaveFileRoot";

export function* parseWorld({
  parseByTemplate
}: TemplateParser): ParseIterator<SaveGameWorld> {
  const typeName = yield readKleiString();
  validateDotNetIdentifierName(typeName);
  if (typeName !== AssemblyTypeName) {
    throw new Error(
      `Expected type name "${AssemblyTypeName}" but got "${typeName}".`
    );
  }

  const world = yield* parseByTemplate<SaveGameWorld>(AssemblyTypeName);
  return world;
}

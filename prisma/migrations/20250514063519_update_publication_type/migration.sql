/*
  Warnings:

  - You are about to alter the column `publication` on the `Livre` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Livre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "auteur" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "publication" DATETIME NOT NULL
);
INSERT INTO "new_Livre" ("auteur", "id", "publication", "resume", "titre") SELECT "auteur", "id", "publication", "resume", "titre" FROM "Livre";
DROP TABLE "Livre";
ALTER TABLE "new_Livre" RENAME TO "Livre";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

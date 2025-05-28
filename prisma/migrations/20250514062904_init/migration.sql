/*
  Warnings:

  - You are about to drop the column `datepublication` on the `Livre` table. All the data in the column will be lost.
  - Added the required column `publication` to the `Livre` table without a default value. This is not possible if the table is not empty.
  - Made the column `resume` on table `Livre` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Livre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "auteur" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "publication" TEXT NOT NULL
);
INSERT INTO "new_Livre" ("auteur", "id", "resume", "titre") SELECT "auteur", "id", "resume", "titre" FROM "Livre";
DROP TABLE "Livre";
ALTER TABLE "new_Livre" RENAME TO "Livre";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

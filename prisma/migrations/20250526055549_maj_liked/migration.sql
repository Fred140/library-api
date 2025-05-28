-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Livre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "auteur" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "publication" DATETIME NOT NULL,
    "couverture" TEXT,
    "liked" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Livre" ("auteur", "couverture", "id", "publication", "resume", "titre") SELECT "auteur", "couverture", "id", "publication", "resume", "titre" FROM "Livre";
DROP TABLE "Livre";
ALTER TABLE "new_Livre" RENAME TO "Livre";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

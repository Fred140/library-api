-- CreateTable
CREATE TABLE "Livre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "auteur" TEXT NOT NULL,
    "resume" TEXT,
    "datepublication" DATETIME NOT NULL
);

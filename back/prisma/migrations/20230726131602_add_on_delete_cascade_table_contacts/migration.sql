-- DropForeignKey
ALTER TABLE `contacts` DROP FOREIGN KEY `contacts_userId_fkey`;

-- AddForeignKey
ALTER TABLE `contacts` ADD CONSTRAINT `contacts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191229210042 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE game ADD sport_id INT DEFAULT NULL, ADD event_id VARCHAR(255) NOT NULL, ADD game_data VARCHAR(2056) NOT NULL');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318CAC78BCF8 FOREIGN KEY (sport_id) REFERENCES sport (id)');
        $this->addSql('CREATE INDEX IDX_232B318CAC78BCF8 ON game (sport_id)');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL, CHANGE api_token api_token VARCHAR(255) DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL, CHANGE first_name first_name VARCHAR(255) DEFAULT NULL, CHANGE last_name last_name VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE sport CHANGE date_created date_created DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE game_bet CHANGE user_id user_id INT DEFAULT NULL, CHANGE game_id game_id INT DEFAULT NULL, CHANGE pick_value pick_value VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE game_thread CHANGE user_id user_id INT DEFAULT NULL, CHANGE game_id game_id INT DEFAULT NULL, CHANGE content content VARCHAR(1024) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318CAC78BCF8');
        $this->addSql('DROP INDEX IDX_232B318CAC78BCF8 ON game');
        $this->addSql('ALTER TABLE game DROP sport_id, DROP event_id, DROP game_data');
        $this->addSql('ALTER TABLE game_bet CHANGE user_id user_id INT DEFAULT NULL, CHANGE game_id game_id INT DEFAULT NULL, CHANGE pick_value pick_value VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE game_thread CHANGE user_id user_id INT DEFAULT NULL, CHANGE game_id game_id INT DEFAULT NULL, CHANGE content content VARCHAR(1024) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE sport CHANGE date_created date_created DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`, CHANGE api_token api_token VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE email email VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE first_name first_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE last_name last_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
    }
}

class CommandFormat {
    constructor(name, description, alias, usage, permissions) {
        this.name = name;
        this.desc = description;
        this.alias = alias;
        this.usage = usage;
        this.permissions = permissions;
    }
};

module.exports = CommandFormat;
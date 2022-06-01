class CommandFormat {
    constructor(name, description, alias, usage, dmsAllowed, permissions) {
        this.name = name;
        this.desc = description;
        this.alias = alias;
        this.usage = usage;
        this.permissions = permissions;
        this.dmsAllowed = dmsAllowed;
    }
};

module.exports = CommandFormat;